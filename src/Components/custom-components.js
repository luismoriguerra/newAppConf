import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import {gold, blue, skyblue, gray, white } from '../colors.js';

const HeaderWrapper = styled(View)`
    padding-top: 50px;
    padding-bottom: 15px;
    align-items: center;
    background-color: ${white};
`;
const TextWrapper = styled(Text)`
    color: ${blue};
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    font-family: 'Roboto'
`;

export class Header extends React.PureComponent {
    render() {
        return (
            <HeaderWrapper>
                <TextWrapper>
                    {this.props.title}
                </TextWrapper>
            </HeaderWrapper>
        );
    }
}


