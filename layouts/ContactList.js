import React, {Component} from 'react';
import SearchBar from '../components/SearchBar.js'
import Card from '../components/Card.js'
import { Button,Icon,Text } from 'native-base';
import { StyleSheet,ScrollView} from 'react-native';

export default class ContactList extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  navigate = (name,phone) => {
    this.props.navigation.navigate('Detail',{
      phone:phone,
      name:name
    })
  }

  state = {
    data : [
      {
        name : 'Chinh',
        phone : '0702348231'
      },
      {
        name : 'Bao',
        phone : '0905007008'
      }
    ]
  }
  
  render() {
    const { navigation } = this.props;
    let data = this.state.data
    const obj = navigation.getParam('addObj',null);
    if(obj!==null) data.push(obj)
    const list = data.map((i,index)=>{
      return <Card nav={()=>this.navigate(i.name,i.phone)} name={i.name} number={i.phone} key={index}/>
    })
    return (
        <ScrollView>
            <SearchBar/>
            {list}
            <Button style={styles.add} rounded iconLeft onPress={() => this.props.navigation.navigate('Add')}>
              <Icon name='person' />
              <Text>Add Contact</Text>
            </Button>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    position: 'absolute',
    width: 160,
    right: 20,
    bottom: 0
  },
});