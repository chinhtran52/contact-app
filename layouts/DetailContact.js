import React, { Component } from 'react';
import {Content, Item, Input, Icon ,Thumbnail} from 'native-base';
import { StyleSheet,Button} from 'react-native';
import {firebaseApp} from '../components/FirebaseConfig'

export default class DetailContact extends Component {
    static navigationOptions = {
        title: 'Detail',
      };

    constructor(props) { 
      super(props); 
      this.state = { 
        name : '',
        phone: '',
      };
      this.itemsRef = firebaseApp.database().ref('Contacts')
    }

    delContact = (key) =>{
      this.itemsRef.child(key).remove()
      this.props.navigation.navigate('Home')
    }
    
    render() {
        const { navigation } = this.props;
        const ContactName = navigation.getParam('name');
        const ContactPhone = navigation.getParam('phone');
        const key = navigation.getParam('keyid');
        return (
            <Content>
            <Thumbnail style={styles.avatar} source={{uri: 'https://i.pinimg.com/474x/16/55/cd/1655cd86623d22c6ef4cc45d667544db.jpg'}} />
            <Item>
                <Icon active name='home' />
                <Input placeholder={ContactName}/>
            </Item>
            <Item>
                <Icon active name='home' />
                <Input placeholder={ContactPhone}/>
            </Item>
            <Button onPress={()=>this.delContact(key)} title="Delete"/>
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