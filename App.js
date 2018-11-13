import React from 'react';
import {StatusBar, StyleSheet, Text, View, TextInput, Dimensions, ScrollView}from 'react-native';
import {LinearGradient} from 'expo';
import TodoList from './ToDoList'
import ToDoList from './ToDoList';

export default class App extends React.Component {
  state={
    newActivity:''
  }

  newActivityController = textValue =>{
    this.setState({
      newActivity:textValue
    });
  };

  render() {
    return (
      <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.appTitle}>My To Do List</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Enter activity..."
          onChangeText={this.newActivityController}
          returnKeyType={'done'}
          autoCorrect={false}/>
          <ScrollView>
            <TodoList/>
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
const {width, height}=Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  appTitle:{
    color: '#fff',
    fontSize: 36,
    width: width - 30,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card:{
    backgroundColor:'#fff',
    flex:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  input:{
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
});
