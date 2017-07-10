/**
 * @providesModule HSNavBar
 */

import React from 'react'
import { Platform, Navigator, StyleSheet, TouchableHighlight, StatusBar } from 'react-native'
import NavTitleComponent from 'HSNavTitleComponent'
import NavTitleIcon from 'HSNavTitleIcon'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

let styles = {}

const NavigationBar = (toggleSideMenu) => {
  const src = require('../../images/logo.png')
  const LeftButton = (route, navigator, index, navState) => {
    if (!route.leftIcon) {
      return null
    }
    if (index > 0) {
      const leftAction = navigator.pop
      const leftIcon = 'chevron-left'
      return (
        <Icon
          onPress={leftAction}
          name={leftIcon} size={28} />
      )
    }
    return (
      <TouchableHighlight
        style={{marginTop: 7, marginLeft: 9}}
        onPress={toggleSideMenu}
        underlayColor='transparent'>
        <Icon
          color='white'
          name='menu'
          size={28}
        />
      </TouchableHighlight>
    )
  }

  const RightButton = (/* route, navigator, index, navState */) => {
    return null
  }

  const Title = (route, navigator, index, navState) => {
    if (route.title) {
      return (
        <NavTitleComponent style={styles.title} title={route.title} />
      )
    }
    return (
      <NavTitleIcon src={src} />
    )
  }

  const StatusBar = (route, navigator, index, navState) => {
    return (
      <StatusBar hidden={route.statusBarHidden}
        barStyle="dark-content"/>
    )
  }

  return (
    <Navigator.NavigationBar
      routeMapper={{
        LeftButton,
        Title,
        RightButton,
        StatusBar
      }}
      style={styles.navBar}
    />
  )
}

styles = StyleSheet.create({
  navBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 65,
    backgroundColor: colors.secondary ,
    ...Platform.select({
      android: {
        height: 55
      }
    })
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  },
  title: {
    marginTop: 50
  }
})

export default NavigationBar
