import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Separator } from 'native-base';

export default class SeparatorRow extends React.PureComponent {
    render() {
        return (
            <Separator bordered>
                <Text>{this.props.item.hour}</Text>
            </Separator>
        );
    }
}
