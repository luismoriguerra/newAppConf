import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainNavigation from './MainNavigation.js';
import ScheduleDetails from './Schedule/ScheduleDetails.js';
import SpeakerDetails from './Speakers/SpeakerDetails.js';

import JuntaScreen from './Mas/JuntaScreen.js';
import HotelScreen from './Mas/HotelScreen.js';
import CiudadScreen from './Mas/CiudadScreen.js';
import AcercaScreen from './Mas/AcercaScreen.js';
import AospineScreen from './Mas/AospineScreen.js';
import Posters from './Mas/Posters.js';

// import HeaderSection from './src/Components/Header.js'
const FullPages = StackNavigator({
  // Get all the tabas
  MainNavigation: {
    screen: MainNavigation,
    navigationOptions: {
      header: null
    }
  },
  // after that we have to map all detail pages
  schedule_detail: {
    screen: ScheduleDetails,
  },
  speaker_details: {
    screen: SpeakerDetails,
  },
  Junta: {
    screen: JuntaScreen,
  },
  Hotel: {
    screen: HotelScreen,
  },
  Ciudad: {
    screen: CiudadScreen,
  },
  Acerca: {
    screen: AcercaScreen,
  },
  Aospine: {
    screen: AospineScreen,
  },
  Posters: {
    screen: Posters,
  }
}
// , {initialRouteName: 'Ciudad'}
);

export default FullPages;
