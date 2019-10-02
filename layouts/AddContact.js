import React, { Component } from 'react';
import {Content, Item, Input, Icon ,Thumbnail} from 'native-base';
import { StyleSheet,Button} from 'react-native';
import {firebaseApp} from '../components/FirebaseConfig'

export default class AddContact extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      name : '',
      phone: '',
    };
    this.itemsRef = firebaseApp.database().ref('Contacts')
  }

  static navigationOptions = {
    title: 'Add new contact',
  };

  navigate = () => {
    this.props.navigation.navigate('Home')
  }

  changeInfo = (event,target) => {
    this.setState({
      [target]: event,
    });
  }

  addContact = () => {
    alert('Them contact')
    this.navigate()
    this.setDB()
  }

  setDB = () => {
    this.itemsRef.push({
      name : this.state.name,
      phone: this.state.phone
    })
  }

  render() {
    return (
        <Content>
          <Thumbnail style={styles.avatar} source={{uri: 'https://i.pinimg.com/474x/16/55/cd/1655cd86623d22c6ef4cc45d667544db.jpg'}} />
          <Item>
            <Icon active name='home' />
            <Input placeholder='Tên' onChangeText={(event,target)=>this.changeInfo(event,'name')}/>
          </Item>
          <Item>
            <Icon active name='home' />
            <Input placeholder='Điện thoại' onChangeText={(event,target)=>this.changeInfo(event,'phone')}/>
          </Item>
          <Button onPress={this.addContact} title="Save"/>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height:200,
    borderRadius:100,
    alignSelf: 'center'
  },
});