import React, { Component, PropTypes } from 'react'
import {
  
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import dateStyle from './styles/hyDate'

export default class Date extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.props.date || '',
      isDateTimePickerVisible: false
    }
  }
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  static defaultProps = {
    dateInputStyle: {}
  }

  _changeDate(value){
    this.props.changeDate(value, this.props.name)
  }

  render() {
    return (
      <DatePicker
        style={[dateStyle.datePicker, this.props.style]}
        date={this.state.date}
        mode="date"
        placeholder={this.props.placeholder || "select date"}
        format="YYYY-MM-DD"
        minDate={this.props.minDate || "1900-01-01"}
        maxDate={this.props.maxDate || "2100-12-31"}
        showIcon={false}
        confirmBtnText="确定"
        cancelBtnText="取消"
        customStyles={{
          dateInput: {
            borderWidth: 0,
            ...this.props.dateInputStyle
          },
          dateText: {
            color: this.props.dateTextColor || '#000'
          },
          placeholderText: {
            color: this.props.placeholderTextColor || '#000'
          }
        }}
        onDateChange={(date) => { 
          this._changeDate(date) 
          this.setState({
            date: date
          })
        }}
      />
    )
  }
}