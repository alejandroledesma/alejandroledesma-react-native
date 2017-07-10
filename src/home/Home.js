import React, { Component } from 'react'
import { ScrollView, TouchableHighlight, View, StyleSheet, Platform, Image } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Button,
  Grid,
  Col,
  Row
} from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

class Home extends Component {
  render () {
    const { toggleSideMenu } = this.props
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.hero}>
          <Image style={ styles.avatar } source={{
            uri: 'https://avatars2.githubusercontent.com/u/15013887?v=3&u=c4a871fdf86cb9f1c8f06c742f1229d91a996ff8&s=400',
            width: AVATAR_SIZE,
            height: AVATAR_SIZE
          }}/>
          <Text style={styles.h1}>Alejandro Ledesma</Text>
          <Text style={styles.h2}>Front-end Developer</Text>
        </View>
        <View style={styles.pWrapper}>
          <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate ad, ab unde officiis suscipit id laboriosam deleniti commodi, omnis repellendus maxime impedit voluptatum tempore? Facere dolorum ab sapiente illum!</Text>
          <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate ad, ab unde officiis suscipit id laboriosam deleniti commodi, omnis repellendus maxime impedit voluptatum tempore? Facere dolorum ab sapiente illum!</Text>
          <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate ad, ab unde officiis suscipit id laboriosam deleniti commodi, omnis repellendus maxime impedit voluptatum tempore? Facere dolorum ab sapiente illum!</Text>
        </View>
      </ScrollView>
    )
  }
}

const AVATAR_SIZE = 120;

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  h1: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  h2: {
    color: 'white',
    marginTop: 10,
    fontSize: 18
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary
  },
  pWrapper: {
    padding: 20
  },
  p: {
    fontSize: 16,
    marginBottom: 15
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default Home
