import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottonTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import db from '../.config';
import firebase from 'firebase'; 
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStoryScreen},
  WriteStory: {screen: WriteStoryScreen},
},

{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName === "ReadStory"){
        return(
          <Image source = {require("./assets/read.png")}
          style = {{width:40, height:40}}>

          </Image>
        )
      }
      else if(routeName === "Write"){
        return(
          <Image source = {require("./assets/write.png")}
          style = {{width: 40, height:40}}>

          </Image>
        )
      }
    }
  })
}
);
const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen}, 
  TabNavigator:{screen:TabNavigator}
})

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

