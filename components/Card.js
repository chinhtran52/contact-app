import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text,Left, Body} from 'native-base';
export default class CardImageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  render() {
    return (
        <Card>
        <CardItem button onPress={this.props.nav}>
            <Left>
            <Thumbnail source={{uri: 'https://i.pinimg.com/474x/16/55/cd/1655cd86623d22c6ef4cc45d667544db.jpg'}} />
            <Body>
                <Text>{this.props.name}</Text>
                <Text note>{this.props.number}</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image source={{uri: 'https://i.pinimg.com/474x/16/55/cd/1655cd86623d22c6ef4cc45d667544db.jpg'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        </Card>
    );
  }
}