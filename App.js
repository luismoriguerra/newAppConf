import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainScreen from './src/Containers/MainScreen.js';
import ScheduleDetails from './src/Containers/ScheduleDetails.js';
import SpeakerDetails from './src/Containers/SpeakerDetails.js';

import HeaderSection from './src/Components/Header.js'


const App = StackNavigator({
  // Get all the tabas
  MainScreen: {
    screen: MainScreen,
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
});

export default App;

// <View style={{paddingTop: Platform.OS === ‘ios’ ? 0 : Expo.Constants.statusBarHeight}}>
//   <-- your react navigation stack or whatever goes here -->
// </View>