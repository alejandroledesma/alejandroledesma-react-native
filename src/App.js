import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import Home from './home/HomeNav'
import About from './about/AboutRootContainer'
import Contact from './contact/ContactRootContainer'
import Pricing from './pricing/PricingRootContainer'
import More from './more/MoreRootContainer'

import { Tabs, Tab } from 'react-native-elements'

let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'home'
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }
  render () {
    const { toggleSideMenu } = this.props
    const { selectedTab } = this.state
    return (
      <Tabs hidesTabTouch>
        <Tab
          titleStyle={[styles.titleStyle]}
          selected={selectedTab === 'home'}
          renderIcon={() => <Icon color={colors.grey2} name='perm-identity' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='perm-identity' size={26} />}
          onPress={() => this.changeTab('home')}>
          <Home toggleSideMenu={toggleSideMenu} />
        </Tab>
        <Tab
          selected={selectedTab === 'about'}
          renderIcon={() => <Icon color={colors.grey2} name='important-devices' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='important-devices' size={26} />}
          onPress={() => this.changeTab('about')}>
          <About />
        </Tab>
        <Tab
          selected={selectedTab === 'contact'}
          renderIcon={() => <Icon color={colors.grey2} name='contacts' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='contacts' size={26} />}
          onPress={() => this.changeTab('contact')}>
          <Contact />
        </Tab>
        <Tab
          selected={selectedTab === 'pricing'}
          renderIcon={() => <Icon color={colors.grey2} name='attach-money' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='attach-money' size={26} />}
          onPress={() => this.changeTab('pricing')}>
          <Pricing />
        </Tab>
        <Tab
          selected={selectedTab === 'more'}
          renderIcon={() => <Icon color={colors.grey2} name='list' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='list' size={26} />}
          onPress={() => this.changeTab('more')}>
          <More />
        </Tab>
      </Tabs>
    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default App