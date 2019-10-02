import React, { Component } from 'react';
import {Content, Item, Input, Icon ,Thumbnail} from 'native-base';
import { StyleSheet,Button} from 'react-native';
export default class AddContact extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      name : '',
      phone: '',
    }; 
  }

  static navigationOptions = {
    title: 'Add new contact',
  };

  text = 'hello'

  navigate = () => {
    this.props.navigation.navigate('Home',{
      addObj : {
        name : this.state.name,
        phone : this.state.phone
      }
    })
  }

  changeInfo = (event,target) => {
    this.setState({
      [target]: event,
    });
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
          <Button onPress={this.navigate} title="Save"/>
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