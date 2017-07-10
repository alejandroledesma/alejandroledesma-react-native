import React, { Component } from 'react'
import { Navigator, StatusBar, View } from 'react-native'
import Home from './Home'
import navigationBar from 'HSNavBar'

const initialRoute = {
  component: Home,
  name: 'home',
  title: 'Home',
  leftIcon: true
}

class HomeNav extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    const { toggleSideMenu } = this.props
    return (
      <View>
        <route.component toggleSideMenu={toggleSideMenu} navigator={navigator} {...route.passProps} />
        <StatusBar
          barStyle="light-content"/>
      </View>
    )
  }
  render () {
    const { toggleSideMenu } = this.props
    return (
      <Navigator
        navigationBar={navigationBar(toggleSideMenu)}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

export default HomeNav
