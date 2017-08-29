import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Animated,
  ListView
} from 'react-native';
import request from '../util/request'
import Loading from '../component/HYLoading'
import SGListView from './SGListView'

//style
import hyListStyle from './styles/hyList';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const cachedResults = {
  isRendered: true
}

class OrderList extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      page: 1,
      total: 0,
      loading: true,
      ds
    }
  }
  _data = []

  fetching = false

  componentWillMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  // 渲染行
  _renderItem(row) {
    return this.props.item(row)
  }

  // 默认获取第一页
  componentDidMount() {
    this._fetchData(1)
  }

  _hasMore() {
    return true
  }

  // 异步请求
  _fetchData(page, isPullRefresh) {
    if (this.fetching) return
    this.fetching = true
    const url = this.props.url
    cachedResults.isRendered = false
    request.get(
      url, {
        accessToken: 'asdfasfd',
        page: page
      }
    ).then(newData => {
      if (!this._isMounted) return
      this._data = !isPullRefresh ? this._data.concat(newData.data) : newData.data
      this.setState({
        ds: this.state.ds.cloneWithRows(this._data),
        loading: false
      });
      this.fetching = false
    }).catch(error => {
      console.warn(error)
    })
  }

  _fetchMoreData() {
    if (!this._hasMore()) return
    this._fetchData(this.state.page)
  }

  // 尾部
  _renderFooter() {
    // if (!this._hasMore()
    //   && this.state.data.length != 0
    //   && cachedResults.isRendered) {
    //   return (
    //     <View style={hyListStyle.loadingMore}>
    //       <Text styler={hyListStyle.loadingText}>没有更多了</Text>
    //     </View>
    //   )
    // }
    return <ActivityIndicator style={hyListStyle.loadingMore} />

  }

  componentDidUpdate() {
    cachedResults.isRendered = true
  }

  _loadPage(row) {
    this.props.navigation.navigate('OrderDetail', { name: 'OrderDetail', row: row })
  }

  _keyExtractor = (item, index) => item.key

  _onRefresh() {
    this._fetchData(1, true)
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <View>
        <SGListView
          dataSource={this.state.ds}
          stickyHeaderIndices={[]}
          initialListSize={10}
          onEndReachedThreshold={20}
          scrollRenderAheadDistance={20}
          renderFooter={this._renderFooter.bind(this)}
          pageSize={10}
          renderRow={this._renderItem.bind(this)}
          onEndReached={this._fetchMoreData.bind(this)}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this._onRefresh.bind(this)}
            />}
        />
      </View>
    )
  }
}

export default OrderList