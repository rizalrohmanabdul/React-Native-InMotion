import React, { Component } from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import Home from '../Screen/Home'
import Detail from '../Screen/DetailUser'


const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    Detail: Detail,
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(createSwitchNavigator(
    {
     
        HomeNavigator,
     
      },
      {
        initialRouteName: 'HomeNavigator',
        headerMode:'none'
      }
      
));