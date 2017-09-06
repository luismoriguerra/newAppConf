import React from 'react';
import Expo from 'expo';

import { View, TouchableWithoutFeedback, Text, Image } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';

import { Header } from '../../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../../colors.js';
import { nationalSpeaker, internationalSpeaker } from './data.js';

import styled from 'styled-components/native';


const CircleItem = styled(View) `
   flex-grow:1;
   flex-shrink:1;
   flex-basis: 40%;
   display: flex;
   margin-vertical: 20px;   
   display: flex;
   align-items: center;
   justify-content: center; 
`;

const CircleList = styled(View) `
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;

const TextWrap = styled(Text) `
    font-size: 16px;
    margin-top: 10px; 
`;


const ImageWrap = styled(Image) `
    width: 120px;
    height: 120px;
    border-radius: 60px; 
`;

const Speaker = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.goToSpeaker(props)}>
            <CircleItem>
                <ImageWrap source={props.image} />
                <TextWrap>{props.shortname}</TextWrap>
            </CircleItem>
        </TouchableWithoutFeedback>
    )
}

const TitleWrapper = styled(View) `
    background-color: ${gold};
    justify-content: center;
    align-items: center;
    padding: 10px
    
`;

const TitleText = styled(Text) `
    font-size: 20px;
`;

export default class Speakers extends React.PureComponent {

    goToSpeaker = (item) => {
        this.props.navigation.navigate('speaker_details', { item })
    };

    render() {

        return (
            <Container>
                <Header title="Expositores"></Header>
                <Content>
                    <TitleWrapper>
                        <TitleText>Expositores Nacionales</TitleText>
                    </TitleWrapper>
                    <CircleList>

                        {nationalSpeaker.map((item, index) =>
                            <Speaker
                                key={index}
                                {...item}
                                goToSpeaker={this.goToSpeaker}
                            />)}
                    </CircleList>
                    <TitleWrapper>
                        <TitleText>Expositores Internacionales</TitleText>
                    </TitleWrapper>
                    <CircleList>
                        {internationalSpeaker.map((item, index) =>
                            <Speaker
                                key={index}
                                {...item}
                                goToSpeaker={this.goToSpeaker}
                            />)}
                    </CircleList>
                </Content>
            </Container>
        );
    }
}
