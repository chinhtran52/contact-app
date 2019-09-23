import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactList from './layouts/ContactList';
import DetailContact from './layouts/DetailContact';
import AddContact from './layouts/AddContact'

const AppNavigator = createStackNavigator(
    {
      Home: ContactList,
      Detail: DetailContact,
      Add: AddContact,
    },
    {
      initialRouteName: 'Home',
    }
  );

export default createAppContainer(AppNavigator);