import React, { Component } from 'react'
import Input from '../component/HYInputSimple'
import HYPicker from '../component/HYPicker'
import Button from '../component/HYButton'
import financingPlanStyle from '../styles/financingPlan'
import HYCalendar from "../component/HYCalendars"
import Util from "../util/utils"
import {holidays,workdays} from  "../util/data"
import _ from 'lodash'
import {
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width;
const LoanDayMinN = 3; //放款日下限与今天的相隔天数工作日TODO 待确认
const LoanDayMaxN = 30; //放款日上限与今天的相隔天数自然日TODO 待确认
export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        money: '12',
        loanAccount: {
          display: '财富宝余额',
          value: 'cfbye'
        },
        cashWithdrawalAccount: {
          display: '平安银行(004)',
          value: '004'
        },
        intDate :{
            display:"6个月",
            value:"06",
            type:"1",
            maxMonths:6,
            minDays:null,
            maxDays:null
        },
        loanDate: '',
        repaymentDate: '',
        trasferShare: '100'
      },
      loanAccountList: [
        {
          display: '财富宝余额',
          value: 'cfbye'
        }, {
          display: '支付宝余额',
          value: 'zfbye'
        }, {
          display: '银行卡余额',
          value: 'yhkye'
        }
      ],
      cashWithdrawalAccountList: [
        {
          display: '平安银行(001)',
          value: '001'
        }, {
          display: '平安银行(002)',
          value: '002'
        }, {
          display: '平安银行(003)',
          value: '003'
        }, {
          display: '平安银行(004)',
          value: '004'
        }
      ],
      datesArr :[
          {
              display:'7-30天',
              type:'0',
              value:'01',
              minDays:7,
              maxDays:30,
              maxMonths:null
          },
          {
              display:'2个月',
              type:'1',
              value:'02',
              minDays:null,
              maxDays:null,
              maxMonths:2
          },
          {
              display:'3个月',
              type:'1',
              value:'03',
              minDays:null,
              maxDays:null,
              maxMonths:3
          },
          {
              display:'4个月',
              type:'1',
              value:'04',
              minDays:null,
              maxDays:null,
              maxMonths:4
          },
          {
              display:'5个月',
              type:'1',
              value:'05',
              minDays:null,
              maxDays:null,
              maxMonths:5
          },
          {
              display:'6个月',
              type:'1',
              value:'06',
              minDays:null,
              maxDays:null,
              maxMonths:6
          }
      ],
      disabled: false,
      calIsShow : false,
      minDate : "",
      maxDate: "",
      selectedDate : "",
      disabledDates : [],
      dateName : 'loanDate'
    }
    this.calendar = null;
  }
  componentDidMount(){
      //初始化放款日期
      this._showCal(true);
  }
  validation = {
    money: true,
    trasferShare: true
  }

  _formValueChange(value, type) {
    let obj = this.state.formData
    obj[type] = value
    this.setState({
      formData: obj
    })
      this._renderRepaymet();
  }

  _doNext() {
    console.log(this.state)
    this.props.onPress()
    
  }
  _renderRepaymet = () => { //根据放款日自动选择还款日
      //获取当前月份
      var selectDates = this.state.formData.intDate;
      maxDate = "";
      if(selectDates.type == "1"){
          let minDate = Util.clone(this.state.formData.loanDate);
          let arr = minDate.split("-");
          arr[1] = arr[1].replace(/^0{1}/,"");
          let months = selectDates.maxMonths;
          arr[1] = parseInt(arr[1]) + months;
          if(arr[1] > 12){
              arr[0]  = parseInt(arr[0]) +1;
              arr[1] = parseInt(arr[1]) - 12;
          }
          var date = new Date(arr[0],parseInt(arr[1])-1,arr[2]);
          maxDate =  Util.formatDate(date);
      }else{
          let minDate = Util.clone(this.state.formData.loanDate);
          minDate = Util.reverseFormatDate(minDate);
          minDate.setDate(minDate.getDate()+selectDates.maxDays);
          maxDate = Util.formatDate(minDate);
      }
      var formData = this.state.formData;
      formData['repaymentDate'] = maxDate;
      this.setState({
          formData:formData
      });
  }
  _showCal = (isInitMark) => {
      //放款日
      var dd = new Date();
      var minDate = Util.formatDate(dd);
      var currentYear = dd.getFullYear();

      //获取可选的最大日期
      var today1 = new Date();
      today1.setDate(today1.getDate()+LoanDayMaxN);
      var maxDate =  Util.formatDate(today1);
      var endYear = today1.getFullYear();

      //获取今天和最大日期之间的休息日；
      var weekends = Util.getWeekends(new Date(),LoanDayMaxN);
      //加上国家的法定节假日
      weekends = weekends.concat(holidays[currentYear]);
      //获取被调为工作日的休息日
      var workdaysArr = workdays[currentYear] ? workdays[currentYear] : [];
      //如果正好跨年，还要加上下一年的处理
      if(endYear != currentYear){
          weekends = weekends.concat(holidays[endYear]);
          workdaysArr = workdaysArr.concat(workdays[endYear]);
      }
      weekends.forEach(function (data,index) {
          workdaysArr.forEach(function (el,i) {
              if(data === el){
                  weekends.splice(index,1);
              }
          })
      });
      var minDateIndex = weekends.findIndex((n) => n === minDate);
      var minDateValue = Util.clone(dd);
      var n1 = 0;
      //今天+LoanDayMinN个工作日为放款日下限
      while (n1 < LoanDayMinN)
      {
          minDateValue.setDate(minDateValue.getDate()+1);
          minDate = Util.formatDate(minDateValue);
          minDateIndex =  weekends.findIndex((n) => n === minDate);
          if(minDateIndex == -1){
              n1++;
          }
      }

      if(isInitMark === true){//初始化
          //this.state.formData.loanDate
          var formData = this.state.formData;
          formData['loanDate'] = minDate;
          this.setState({
              formData:formData
          });
          this._renderRepaymet();
      }else{
          this.setState({
              minDate : minDate,
              selectedDate : this.state.formData.loanDate ?this.state.formData.loanDate: minDate,
              maxDate: maxDate,
              calIsShow : true,
              disabledDates : weekends,
              dateName:"loanDate"
          });
      }

  }
  _selectRepayment = ()=>{
      // 当选择的期限范围为7-30天时可以点击
      var initDate  = this.state.formData.intDate;
      if(initDate.value === "01"){
          var loanDate = Util.reverseFormatDate(this.state.formData.loanDate);

          var minDate = Util.clone(loanDate);
          minDate.setDate(minDate.getDate()+initDate.minDays);
          minDate = Util.formatDate(minDate);
          var maxDate = Util.clone(loanDate);
          maxDate.setDate(maxDate.getDate()+initDate.maxDays);
          maxDate = Util.formatDate(maxDate);
          this.setState({
              minDate : minDate,
              selectedDate : maxDate,
              maxDate: maxDate,
              calIsShow : true,
              disabledDates : [],
              dateName:"repaymentDate"
          });

      }
  }
  _onDayPress = (day) => { //选择日期后，回显到页面上
      var formData = this.state.formData;
      formData[this.state.dateName] = day.dateString;
      this.setState({
          calIsShow : false,
          formData : formData
      });
      if(this.state.dateName === "loanDate"){
          this._renderRepaymet();
      }
  }

  _disableBtn(value, name) {

    this.validation[name] = value

    let result = true
    _.forEach(this.validation, (item) => {
      if(!item) result = false
    })
    console.log(this.validation)
    this.setState({
      disabled: !result
    })
  }

  render() {
    let calendar = null;
    if(this.state.calIsShow){
        calendar  =  <HYCalendar onDayPress = {this._onDayPress} disabledDates = {this.state.disabledDates} minDate={this.state.minDate} selectedDate = {this.state.selectedDate} maxDate={this.state.maxDate}/>
    }
    return (
      <View style={[financingPlanStyle.container, this.props.style]}>
        <View style={financingPlanStyle.planItem}>
          <Text>金额</Text>
          <View style={financingPlanStyle.inputContainer}>
            <Input
              name='money'
              validation={['number', 'isEmpty']}
              value={this.state.formData.money}
              change={this._formValueChange.bind(this)}
              validationCallback={this._disableBtn.bind(this)}
            />
            <Text>万元</Text>
          </View>
        </View>

        <View style={financingPlanStyle.planItem}>
          <Text>转让份额</Text>
          <View style={financingPlanStyle.inputContainer}>
            <Input
              name='trasferShare'
              value={this.state.formData.trasferShare}
              change={this._formValueChange.bind(this)}
              validation={['number', 'isEmpty']}
              validationCallback={this._disableBtn.bind(this)}
            />
            <Text>份</Text>
          </View>
        </View>

        <View style={financingPlanStyle.planItem}>
          <Text>选择期限</Text>
            <View style={financingPlanStyle.inputContainer}>
                <HYPicker
                    name='intDate'
                    value={this.state.formData.intDate}
                    data={this.state.datesArr}
                    pickerChange={this._formValueChange.bind(this)}
                />
            </View>
        </View>
        <View style={financingPlanStyle.planItem}>
          <View style={financingPlanStyle.rowColumn}>
            <Text onPress = {this._showCal}>放款日 {this.state.formData.loanDate}</Text>
          </View>
          <View style={financingPlanStyle.rowColumn}>
            <Text onPress = {this._selectRepayment}>还款日 {this.state.formData.repaymentDate}</Text>
          </View>
        </View>

        <View style={financingPlanStyle.planItem}>
          <Text>放款账户</Text>
          <View style={financingPlanStyle.inputContainer}>
            <HYPicker
              name='loanAccount'
              value={this.state.formData.loanAccount}
              data={this.state.loanAccountList}
              pickerChange={this._formValueChange.bind(this)}
            />
          </View>

        </View>

        <View style={financingPlanStyle.planItem}>
          <Text>提现账号</Text>
          <View style={financingPlanStyle.inputContainer}>
            <HYPicker
              name='cashWithdrawalAccount'
              value={this.state.formData.cashWithdrawalAccount}
              data={this.state.cashWithdrawalAccountList}
              pickerChange={this._formValueChange.bind(this)}
            />
          </View>

        </View>

        <View style={[financingPlanStyle.planItem, financingPlanStyle.next]}>
          <Button
            text="下一步"
            borderColor="#fff"
            width={width * .9}
            height={40}
            textColor="#fff"
            disabled={this.state.disabled}
            onPress={this._doNext.bind(this)}
            textSize={15}
          />
        </View>
          {calendar}
      </View>


    )
  }
}