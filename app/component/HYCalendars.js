import React, { Component,PropTypes} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Calendar,LocaleConfig} from 'react-native-calendars';
import baseStyle from '../styles/base';

LocaleConfig.locales['fr'] = {
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNames: ['周日','周一','周二','周三','周四','周五','周六'],
    dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
};

LocaleConfig.defaultLocale = 'fr';


export default  class HYCalendar extends Component{
    constructor(props) {
        super(props);
        let date = new Date();
        let y = date.getFullYear(),
            m = date.getMonth(),
            d = date.getDate();
        let mm = m + 1;
        mm = mm < 10 ? "0"+ mm : mm;
        this.todayDate = y + "-"+mm+"-"+d;
        console.log("********* minDate:"+this.minDate);
    }
    static propTypes = {
        disabledDates:PropTypes.array,
        minDate:PropTypes.string,
        maxDate:PropTypes.string,
        selectedDate : PropTypes.string
    }
    static defaultProps = {
        disabledDates:[],
        maxDate:""
    }
    render(){
        //console.log("********* minDate:"+this.minDate);
        /*
         onDayPress(day){
            //day {year: 2017, month: 6, day: 15, timestamp: 1497484800000, dateString: "2017-06-15"}
             alert("select day: "+day.dateString);
         }
         let  disabledDates = ['2017-06-22','2017-06-26','2017-07-01','2017-07-02'];
         <HYCalendar minDate = "2017-01-01" maxDate = "2017-09-01" disabledDates={disabledDates} onDayPress={this.onDayPress}/>
        * */
        /*
         markedDates={{
         '2012-07-02': {selected: true}
         }}
        * */
        //debugger;
        console.log(this.props.minDate+"*******"+this.props.selectedDate);
        let el = {disabled:true};
        let disabledDatesObj = {};
        let disabledDates = this.props.disabledDates;
        disabledDates.forEach(function(data,index,arr) {
            disabledDatesObj[data] = el;
        });
        let minDate = this.props.minDate ? this.props.minDate  : this.todayDate;
        let selectedDate = this.props.selectedDate ? this.props.selectedDate : this.todayDate;
        disabledDatesObj[selectedDate] = {selected: true};
        return(
            <View style={baseStyle.containerRow}>
                <Calendar
                    onDayPress={this.props.onDayPress}
                    style={baseStyle.calendar}
                    minDate={minDate}
                    maxDate={this.props.maxDate}
                    hideExtraDays
                    markedDates= {disabledDatesObj}
                />
            </View>
        );
    }
}