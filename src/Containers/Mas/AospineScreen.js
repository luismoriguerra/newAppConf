//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { gold, blue, skyblue, gray, white } from '../../colors.js';

const {width, height}  = Dimensions.get('window')

const Container = styled(ScrollView) `
    flex: 1;
    background-color: #fff;
`;

const SectionTop = styled(View) `
    background-color: ${blue};
    display: flex;
    align-items: center;
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

const ImageWrap = styled(Image) `
    width: ${width}px;
   
`;

const Paragraph = styled(Text)`
    margin: 15px;
    font-size: 16px;

`;
// create a component
class Aospine extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'AOSPine',
        headerStyle: {
            paddingTop: 20,
            height: 80
        }
    })

    render() {
        // const { params } = this.props.navigation.state;

        return (
            <Container>
                <SectionTop>
                    <ImageWrap source={require('../../img/aospine.jpg')} />    
                </SectionTop>
                <SectionMiddle>
                    <Paragraph>
​AOSpine is an international community of spine surgeons generating, distrib­uting, and exchanging knowledge to advance science and the spine care profession through research, education, and community development. With this collaborative approach AOSpine continues to advance spine care worldwide.
                    </Paragraph>
                     <Title>
                     Vision
                     </Title>
                     <Paragraph>
                     AOSpine—the leading global academic community for innovative education and research in spine care, inspiring lifelong learning and improving patients' lives.
                     </Paragraph>
                     

                </SectionMiddle>
            </Container>
        );
    }
}



//make this component available to the app
export default Aospine;
