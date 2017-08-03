import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';
import ScheduleList from '../Components/ScheduleList.js'
import { Header } from '../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../colors.js';


const styles = {
    tabs: {
         tabBarUnderlineStyle: 
         {
            backgroundColor: blue 
        }
    },
    tab: {
        tabStyle: {
            backgroundColor: white,
        },
        activeTabStyle: {
            backgroundColor: white,
        },
        textStyle: {
            color: blue
        },
        activeTextStyle: {
            color: blue
        },
    }

}

export default class Schedule extends React.PureComponent {

    render() {
        return (
            <Container>
                <Header title="III Congreso Cirugia Vertebral 2017" />
                <Tabs {...styles.tabs}>
                    <Tab heading="Jue 7" {...styles.tab}>
                        <ScheduleList nav={this.props.navigation} />
                    </Tab>
                    <Tab heading="Vie 8" {...styles.tab} >
                        <ScheduleList nav={this.props.navigation} />
                    </Tab>
                    <Tab heading="Sab 9"  {...styles.tab}>
                        <ScheduleList nav={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

