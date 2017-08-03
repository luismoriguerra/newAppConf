//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
// create a component
class SpeakerDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SpeakerDetails</Text>
            </View>
        );
    }
}



//make this component available to the app
export default SpeakerDetails;
