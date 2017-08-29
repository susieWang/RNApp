import React, { Component } from 'react'
import Item from './FinancingListItem'
import HYList from '../component/HYList'
import config from '../util/config'


class FinancingList extends Component {

  _renderItem(row) {
    return (
      <Item
        row={row}
        key={row.id}
        onPress={this.props.onPress}
      />
    )
  }

  render() {
    return (
      <HYList
        item={this._renderItem.bind(this)}
        url={config.api.financingList}
        style={this.props.style}
      />
    )
  }
}

export default FinancingList