import React, { Component } from 'react';
import {Content, Item, Input, Icon ,Thumbnail} from 'native-base';
import { StyleSheet,Button} from 'react-native';
export default class AddContact extends Component {
  static navigationOptions = ({navigation}) => {
    const obj = {
      name : 'Kit',
      phone : '0703933281'
    }
    return{
      title: 'Add New Contact',
      headerRight: (
        <Button
          onPress={()=>navigation.navigate('Home',{
            addObj : obj
          })}
          title="Save"
        />
      ),
    }
  };

  render() {
    return (
        <Content>
          <Thumbnail style={styles.avatar} source={{uri: 'https://i.pinimg.com/474x/16/55/cd/1655cd86623d22c6ef4cc45d667544db.jpg'}} />
          <Item>
            <Icon active name='home' />
            <Input placeholder='Tên'/>
          </Item>
          <Item>
            <Icon active name='home' />
            <Input placeholder='Điện thoại'/>
          </Item>
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