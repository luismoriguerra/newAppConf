import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';
import ScheduleList from './ScheduleList.js'
import { Header } from '../../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../../colors.js';

import { dia1, dia2, dia3 } from './data.js'

const styles = {
    tabs: {
         tabBarUnderlineStyle: 
         {
            backgroundColor: white 
        }
    },
    tab: {
        tabStyle: {
            backgroundColor: blue,
        },
        activeTabStyle: {
            backgroundColor: blue,
        },
        textStyle: {
            color: white
        },
        activeTextStyle: {
            color: white
        },
    }

}


export default class Schedule extends React.PureComponent {

    render() {
        return (
            <Container>
                <Header title={"III Congreso Nacional de \n Cirugía Vertebral 2017"} />
                <Tabs {...styles.tabs}>
                    <Tab heading="Jue 7" {...styles.tab}>
                        <ScheduleList nav={this.props.navigation} data={dia1} />
                    </Tab>
                    <Tab heading="Vie 8" {...styles.tab} >
                        <ScheduleList nav={this.props.navigation} data={dia2} />
                    </Tab>
                    <Tab heading="Sab 9"  {...styles.tab}>
                        <ScheduleList nav={this.props.navigation} data={dia3}  />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

