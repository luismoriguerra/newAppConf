import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Container, Header, Left, Button, Icon, Title, Body, Tabs, Tab, Text, FooterTab } from 'native-base';
import { TabNavigator, Tabbar } from "react-navigation";
import {Ionicons} from 'react-native-vector-icons';

import Schedule from './Schedule.js'
import Speakers from './Speakers.js'
import PostersScreen from './PostersScreen.js';
import MasScreen from './MasScreen.js'
// https://oblador.github.io/react-native-vector-icons/

import colors from '../colors.js';
import {gold, blue, skyblue, gray, white } from '../colors.js';

const defaultValues = {
  activeTintColor: colors.white,
  activeBackgroundColor: colors.blue
}

const IOSTabBarOptions = {
  ...defaultValues,
}

const ANDtabBarOptions = {
  ...defaultValues,
  style: {
    backgroundColor: colors.blue
  },
  labelStyle: {
    color: colors.white,
    fontSize: 10,
  },
  
  indicatorStyle: {
    backgroundColor: colors.white
  },
}

const defaultHeaderStyles = {
  paddingTop: 30,
  height: 70,
  shadowColor: 'transparent',
  border: 'none'
}


const TabBarIconElement = (iconName) => ({ tintColor, focused }) => (
        <Ionicons
          name={iconName}
          size={26}
          style={{ color: tintColor }}
        />
      )


const MainScreen = TabNavigator({
  Agenda: { 
    screen: Schedule,
    navigationOptions: {
      headerStyle: defaultHeaderStyles,
      title: 'Agenda',
      tabBarIcon: TabBarIconElement('ios-calendar'),
    }
  },
  Ponentes: { 
    screen: Speakers,
    navigationOptions: {
      headerStyle: defaultHeaderStyles,
      title: 'Ponentes',
      tabBarIcon: TabBarIconElement('ios-person'),
    }
  },

  Sponsors: {
    screen: PostersScreen,
    navigationOptions: {
      title: 'Sponsors',
      tabBarIcon: TabBarIconElement('ios-link'),
    }
  },

  Mas: {
    screen: MasScreen,
    navigationOptions: {
      title: 'Mas',
      tabBarIcon: TabBarIconElement('ios-more'),
    }
  },
}, {
  // initialRouteName: 'Sponsors',
  tabBarPosition: 'bottom',
  tabBarOptions:   Platform.OS === 'ios' ?  IOSTabBarOptions :  ANDtabBarOptions     
});

export default MainScreen;