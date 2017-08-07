import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Expo from 'expo';
import { Header } from '../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../colors.js';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get('window');
const data = [
    {
        text: 'Acerca de Aspecive'
    },
    {
        text: 'Acerca de esta App'
    },
    
    {
        text: 'Aspecive Web'
    }

];

const RowContainer = styled(View)`
   
    padding: 30px;
    alignItems: center;
    borderBottomColor: #CCC;
    borderBottomWidth: 1px;
    
`;

const RowText = styled(Text)`
    font-size: 20px;
`;


const Row = ({text}) => {
    return (
        <RowContainer >
            <RowText >{text}</RowText>
        </RowContainer>
    )
}

export default class MasScreen extends React.PureComponent {

    watchDetails = () => {
        //this.props.navigation.navigate('speaker_details')
    }

    render() {
        return (
            <Container>
                <Header title="Mas opciones" />
                <Content>
                    {data.map((item, index) => <Row key={index} {...item} />)}
                </Content>
            </Container>
        );
    }
}
