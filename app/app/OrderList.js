import React, { Component } from 'react'
import config from '../util/config'
import Item from './OrderItem'
import HYList from '../component/HYList'


class OrderList extends Component {

  _loadPage(row) {
    this.props.navigation.navigate('OrderDetail', { name: 'OrderDetail', row: row })
  }
  
  _renderItem(row) {
    return <Item
      row={row}
      key={row.id}
      onSelect={() => this._loadPage.call(this, row)}
    />
  }

  render() {
    return (
      <HYList
        item={this._renderItem.bind(this)}
        url={config.api.orderlist}
      />
    )
  }
}

export default OrderList