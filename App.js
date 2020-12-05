import { StatusBar } from 'expo-status-bar';
import React,{Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';


import LoginScreen from './screens/LoginScreen';
export default class App extends React.Component {
  render(){
  return (
    <View >
     <LoginScreen/>
    </View>
  );
}}

