//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { gold, blue, skyblue, gray, white } from '../../colors.js';


const Container = styled(ScrollView) `
    flex: 1;
    background-color: #fff;
`;

const SectionTop = styled(View) `
    background-color: ${blue};
    display: flex;
    align-items: center;
    padding-vertical: 30px;
`;
const SectionMiddle = styled(View) `
    flex: 1;
    align-items: center;
    margin-bottom: 10px;

`;

const SectionTitle = styled(Text) `
    color: #fff;
    font-size: 25px;
`;

const Title = styled(Text) `
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    color: ${blue};
`;


const Subtitle = styled(Text) `
font-size: 20px;
`;

// create a component
class JuntaScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Junta Directiva',
        headerStyle: {
            paddingTop: 20,
            height: 80
        }
    })

    render() {
        const { params } = this.props.navigation.state;

        return (
            <Container>
                <SectionTop>
                    <SectionTitle> Junta Directiva Aspecive</SectionTitle>
                </SectionTop>
                <SectionMiddle>
                    <Title>Presidente</Title>
                    <Subtitle>Wesley Alaba García</Subtitle>
                    <Title>Vicepresidente</Title>
                    <Subtitle>Jesús Robles Recalde   </Subtitle>
                    <Title>Secretario General</Title>
                    <Subtitle>Marco Chipana Sotomayor  </Subtitle>
                    <Title>Tesorero</Title>
                    <Subtitle>Elar Naun Cari Condori  </Subtitle>
                    <Title>Secretario De Filiales</Title>
                    <Subtitle>Rene Chirinos Zegarra      </Subtitle>
                    <Title>Director De Acción Científica</Title>
                    <Subtitle>Arturo Morales Díaz </Subtitle>
                    <Title>Vocal De Publicaciones Y Biblioteca</Title>
                    <Subtitle>Jesús Somocurcio Alarcón   </Subtitle>
                    <Title>Vocal De Coordinación Interna</Title>
                    <Subtitle>Raúl Macchiavello Falcón   </Subtitle>
                    <Title>Past – Presidente</Title>
                    <Subtitle>Alfonso Orlando Basurco Carpio</Subtitle>
                    <Title>Comité científico</Title>
                    <Subtitle>Alfredo Vasquez Rodríguez</Subtitle>
                    <Subtitle>Daniel Cauti de la Cruz</Subtitle>
                </SectionMiddle>
            </Container>
        );
    }
}



//make this component available to the app
export default JuntaScreen;
