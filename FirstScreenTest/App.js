import React from 'react';
import { Component, TouchableOpacity, TouchableHighlight, StyleSheet, Image, Button, Text,ScrollView, View } from 'react-native';

class VideoList extends React.Component{
  state = {
   names: [
      {
         key: 0,
         id: 0,
         name: 'Video 1',
         author: 'Bob',
         date: 'Sept 10, 2017',
         likes:'25',
         salary:'$$$'
      },
      {
        key: 1,
         id: 1,
         name: 'Video 2',
         author: 'Steve',
         date: 'Sept 6, 2017',
         likes:'8',
         salary:"$$"
      },
      {
        key: 2,
         id: 2,
         name: 'Video 3',
         author: 'Mary',
         date:'Sept 5, 2017',
         likes:'2',
         salary:"$$"
      },
      {
        key: 3,
         id: 3,
         name: 'Video 4',
         author: 'Sue',
         date: 'Aug 14, 2017',
         likes:'3',
         salary:"$"
      },
      {
        key: 4,
         id: 4,
         name: 'Video 5',
         author: 'Jim',
         date: 'Jun 12, 2017',
         likes:'34',
         salary:"$$"
      },
      {
        key: 5,
         id: 5,
         name: 'Video 6',
         author: 'Jack',
         date: 'Apr 21, 2017',
         likes:'20',
         salary:"$$"
      },
      {
        key: 6,
         id: 6,
         name: 'Video 7',
         author: 'Fred',
         date: 'Jan 1, 1990',
         likes:'1500',
         salary:"$$"
      }
   ]
}
alertItemName = (item) => {
   alert(item.name)
}
render() {
   return (
      <ScrollView style = {styles.listContainer}>
         {
            this.state.names.map((item, index) => (
              <View style = {styles.video}>
               <TouchableOpacity
                  key = {item.id}
                  onPress = {() => this.alertItemName(item)}>
                  <Image
                  style={styles.thumbnail}
                  source={{uri: 'https://unsplash.it/150?random'}}
                  />
                  <Text style = {styles.textbox}>
                     {item.name}{'\n'}
                     by {item.author}{'\n'}
                     Posted on {item.date}{'\n'}
                     {item.likes} likes{'\n'}
                     Salary: {item.salary}{'\n'}
                  </Text>
               </TouchableOpacity>
               </View>
            ))
         }
      </ScrollView>
   )
}
}

class MenuBar extends React.Component{
  test(){
    alert("test")
  }
  render(){
    return(
      <View style={styles.menu}>
      <View style={styles.menuView}>
      <TouchableHighlight onPress={() => test()}>
        <Image
            style={styles.image}
            source={{uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//home1600.png'}}
        />
      </TouchableHighlight>
      </View>
      <View style={styles.menuView}>
      <TouchableHighlight onPress={() => test()}>
        <Image
            style={styles.image}
            source={{uri: 'https://cdn3.iconfinder.com/data/icons/inficons-set-2/512/star-ratings-512.png'}}
        />
      </TouchableHighlight>
      </View>
      <View style={styles.menuView}>
      <TouchableHighlight onPress={() => test()}>
        <Image
            style={styles.image}
            source={{uri: 'http://downloadicons.net/sites/default/files/notification-icon-63261.png'}}
        />
      </TouchableHighlight>
      </View>
      <View style={styles.menuView}>
      <TouchableHighlight onPress={() => test()}>
        <Image
            style={styles.image}
            source={{uri: 'https://www.materialui.co/materialIcons/social/person_grey_192x192.png'}}
        />
      </TouchableHighlight>
      </View>
      <View style={styles.menuView}>
      <TouchableHighlight onPress={() => test()}>
        <Image
            style={styles.image}
            source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-128.png'}}
        />
      </TouchableHighlight>
      </View>

      </View>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.form}>
        <VideoList />
        <MenuBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form:{
    flex:2,
  },
  video:{
    flex: 1,
  },
  textbox:{
    borderBottomWidth:5,
    alignItems:"center",
  },
  menuView: {
    flex: 1,
    paddingRight: 5,
    borderRightWidth:5,
  },
  image: {
    height:65,
    width:65,
  },
  thumbnail: {
    height:150,
    width:150,
  },
  listContainer: {
    flex:1,
    paddingLeft: 5,
    paddingTop: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    borderTopWidth: 5,
    height:75,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'flex-end'
  },
})
