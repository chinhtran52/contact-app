import React, { Component } from 'react';
import {View} from 'react-native'
import {Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
    <View searchBar rounded>
        <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
        <Icon name="ios-people" />
        <Button transparent>
        <Text>Tìm kiếm</Text>
        </Button>
        </Item>
    </View>
    );
  }
}