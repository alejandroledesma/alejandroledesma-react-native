/**
 * @providesModule HSNavTitleComponent
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

class NavTitleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title
  }

  render() {
    return (
      <View key="title" style={styles.title}>
        <Text style={styles.text}>{this.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 34
  },
  text: {
    color: 'white',
    fontSize: 20,
  } 
});

export default NavTitleComponent
