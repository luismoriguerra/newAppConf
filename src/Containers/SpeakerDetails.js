//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import { gold, blue, skyblue, gray, white } from '../colors.js';

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

const Container = styled(View)`
    flex: 1;
    background-color: #fff;
`;

const SectionTop = styled(View)`
    background-color: ${blue};
    display: flex;
    align-items: center;
    padding-vertical: 30px;
`;
const SectionMiddle = styled(View)`

`;

const Name = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding-vertical: 10px;
`;

const Position = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding-top: 10px;
`;

const Bio = styled(Text)`
    padding: 20px;
`;
const width = 180;
const ImageWrap = styled(Image) `
    width: ${width}px;
    height: ${width}px;
    border-radius: ${width/2}px; 
`;

// create a component
class SpeakerDetails extends Component {
    render() {
        const { params } = this.props.navigation.state;

        return (
            <Container>
                <SectionTop>
                    <ImageWrap source={params.item.image} />
                </SectionTop>
                <SectionMiddle>
                    <Name>{params.item.name}</Name>
                    <Position>{params.item.subtitle}</Position>
                    <Bio>{params.item.bio}</Bio>
                </SectionMiddle>
            </Container>
        );
    }
}



//make this component available to the app
export default SpeakerDetails;
