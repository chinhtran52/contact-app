import React, {Component} from 'react';
import SearchBar from '../components/SearchBar.js'
import Card from '../components/Card.js'
import { Button,Icon,Text } from 'native-base';
import { StyleSheet,ScrollView} from 'react-native'
import {firebaseApp} from '../components/FirebaseConfig'

export default class ContactList extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props){
    super(props)
    this.itemsRef = firebaseApp.database().ref('Contacts')
  }

  navigate = (name,phone,keyid) => {
    this.props.navigation.navigate('Detail',{
      phone:phone,
      name:name,
      keyid : keyid
    })
  }

  componentDidMount(){
    this.listContacts(this.itemsRef)
  }

  listContacts = (itemsRef) => {
    let results = [];
    this.itemsRef.on('child_added',(dataSnapshot)=>{
      results.push({
        name : dataSnapshot.val().name,
        phone: dataSnapshot.val().phone,
        keyid: dataSnapshot.key
      })
      this.setState({
        data : results
      })
    })
    this.itemsRef.on('child_removed',(dataSnapshot)=>{
      results = results.filter((x)=>x.keyid !== dataSnapshot.key);
      this.setState({
        data : results
      })
    })
  }

  state = {
    data : []
  }
  
  render() {
    const { navigation } = this.props;
    let data = this.state.data
    const obj = navigation.getParam('addObj',null);
    if(obj!==null) data.push(obj)
    const list = data.map((i,index)=>{
      return <Card reload={this.listContacts} nav={()=>this.navigate(i.name,i.phone,i.keyid)} name={i.name} number={i.phone} key={index}/>
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