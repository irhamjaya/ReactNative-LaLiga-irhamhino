import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native'
// konsep function di atas render gak perlu pake var or let jika di dalam render harus pake var or let

export default class App extends Component {
  state = {
    x: 'Andi'
  }
  render() {

    return (
      <View>
        <Text style={{ fontSize: 30 }}>hayyyy{this.state.x}</Text>
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 40 }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: 'blue',
              padding: 20
            }}
            color='lightblue'
            onPress={() => { this.setState({ x: 'Budi' }) }} >
            <Text>klik dong</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
