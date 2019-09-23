import React, { Component } from 'react';
import {Content, Item, Input, Icon ,Thumbnail} from 'native-base';
import { StyleSheet} from 'react-native';

export default class DetailContact extends Component {
    static navigationOptions = {
        title: 'Detail',
      };
    render() {
        const { navigation } = this.props;
        const ContactName = navigation.getParam('name');
        const ContactPhone = navigation.getParam('phone');
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