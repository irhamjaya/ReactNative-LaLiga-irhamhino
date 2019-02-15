import React, { Component } from 'react'
import { View, Button, Text, TextInput } from 'react-native'
// konsep function di atas render gak perlu pake var or let jika di dalam render harus pake var or let

export default class App extends Component {
  state = { nama: '' }
  render() {

    return (
      <View style={{ padding: 25 }}>
        {this.state.nama ? <Text>{this.state.nama}</Text> :
          <Text style={{ fontSize: 20 }}>hayo siapa</Text>}
        <TextInput
          keyboardAppearance='dark'
          style={{ height: 50 }}
          placeholder='Ketik Nama Anda...'
          onChangeText={(e) => { this.setState({ nama: e }) }}
        />
        <Button
          title='klik sini'
          color='lightblue'
          onPress={() => { }}
        />
      </View>
    )
  }
}
