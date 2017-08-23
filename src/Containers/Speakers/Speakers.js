import React from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import Expo from 'expo';

import { Header } from '../../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../../colors.js';
import styled from 'styled-components/native';

const SpeakersData = [
    {
        image: require('../../img/speakers/babor2.png'),   
        shortname: 'Dr. Baabor',
        name: 'Dr. Marcos Baabor',
        subtitle: 'Medico Cirujano',
        flag: 'chile',
        bio: `
- Médico Neurocirujano del Departamento de Neurologia y Neurocirugia del Hospital Clinico Universidad de Chile. \n 
- Medico Neurocirujano del servicio de Neurologia y Neurocirugia del hospital DIPRECA. \n 
- Jefe de la Unidad de Cirugia Estereotactica y funcional del Departamento Neurologia - Neurocirugia del Hospital Clinico Universidad de Chile. \n 
- Presidente del Capitulo de Columna e la FLANC. \n 
- Miembro activo THE WFNS. \n 

        `

    },
    {
        image: require('../../img/speakers/barros.jpg'),   
        shortname: 'Dr. Barros',
        name: 'Dr. Elias Barros Avidago',
        subtitle: 'Medico Cirujano',
        flag: 'brasil',
        bio: `
- Miembro Titular da Sociedade Brasileira de Neurocirugia (SBN) \n
- Membro da SOciedade Brasileira de Neurocirugia Pediatrica (SBN-Ped), (Subordinada a SBN)\n
- Socio Efetivo da Sociedade Brasileira de Coluna.\n
- Responsavel pelo servico de Nuerocirugia Hospital PIO XII, em Sao Paulo dos Campos-SP\n
- Responsavel pelo servico de Neurocirugia Hospital Antoninho da Rocha Marmo-SP\n
- Responsavel pelo servico de Neurocirugia Hospital Sao Francisco, em Jacarei-SP\n
        ` 
    },
    {
        image: require('../../img/speakers/basurco.jpg'),   
        shortname: 'Dr. Basurco',
        name: 'Dr. Basurco',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../../img/speakers/cabrejos.jpg'),
        shortname: 'Dr. Cabrejos',
        name: 'Dr. Jesus Cabrejos Bejarano',
        subtitle: 'Especialidad: Neurocirujano',
        bio: `
- Medico Asistente en el Servicio de Neurotrauma y Columna del Departamento de Neurocirugia del Hospital Nacional "Guillermo Almenara Irigoyen".\n
- Medico Asistente en el Servicio de Neurocirugia Pediatrica del Hospital de Emergencias Pediatricas. \n
`,
    },
    {
        image: require('../../img/speakers/cari.jpg'),
        shortname: 'Dr. Cari',
        name: 'Dr. Elar Cari Condori',
        subtitle: 'Especialidad: Neurocirujano',
        bio: `
- Jefe del Servicio de Neurotrauma y Columna del Departamento de Neurocirugia del Hospital Nacional "Guillermo Almenara Irigoyen" .\n
- Medico Asistente en el Servicio de Neurotrauma y Columna de la Clinica Centenario Peruano Japonesa.\n
- Profesor y Tutor de Neurologia por la Universidad Nacional Mayor de San Marcos.\n
`,
    },
    {
        image: require('../../img/speakers/castelo.jpg'),
        shortname: 'Dr. Castelo',
        name: 'Dr. Jean Marcel Castelo Vega.',
        subtitle: 'Especialidad:  Neurocirujano',
        bio: `
- Jefe de Servicio de Neurocirugia, Hospital Antonio Lorena (Cuzco - Peru). \n
- International Member and Fellow AANS. \n
- International Fellow SBNC, Cirugia de Base de Craneo (Tubingen - Alemania). \n
- International Fellow AOSpine, Cirugia de Columna (Sao Paulo - Brasil). \n
        `

    },
    {
        image: require('../../img/speakers/cauti.jpg'),
        shortname: 'Dr. Cauti',
        name: 'Dr. Daniel Cauti De la Cruz',
        subtitle: 'Cirujano Ortopedico',
        bio: ``,
    },
    {
        image: require('../../img/speakers/dittmar.jpg'),
        shortname: 'Dr. Michael Dittmar',
        name: 'Dr. Daniel Cauti De la Cruz',
        subtitle: 'Cirujano Ortopedico',
        bio: ``,
    },
    {
        image: require('../../img/speakers/laos.jpg'),
        shortname: 'Dr. Laos',
        name: 'Dr. Eduardo J. Laos Plasier',
        subtitle: 'Especialidad: Neurocirujano',
        bio: `
- Medico Asistente en el Servicio de Neurotrauma y Columna del Departamento de Neurocirugia del Hospital "Guillermo Almenara Irigoyen" \n
                `
    },
    {
        image: require('../../img/speakers/pascual.jpg'),
        shortname: 'Dr. Pascual',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../../img/speakers/reis.jpg'),
        shortname: 'Dr, Reis',
        name: 'Dr. Alexander Reis Elias',
        subtitle: 'Cirujano Ortopedico',
        bio: ``,
    },
    {
        image: require('../../img/speakers/robles.jpg'),
        shortname: 'Dr. Robles',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../../img/speakers/soriano.jpg'),
        shortname: 'Dr. Soriano',
        name: 'Dr. Jose A. Soriano Sanchez.',
        subtitle: 'Neurocirujano',
        bio: `
        * Neurocirujano certificado, Pionero de la cirugia minimamente invasiva de columna en America Latina
        *
        `
    },
    {
        image: require('../../img/speakers/vialle.png'),
        shortname: 'Dr. Vialle',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    }
];


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

const TextWrap = styled(Text)`
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

export default class Speakers extends React.PureComponent {

    goToSpeaker = (item) => {
        this.props.navigation.navigate('speaker_details', {item})
    };

    render() {

        return (
            <Container>
                <Content>
                    <Header title="Expositores"></Header>
                    <CircleList>
                        {SpeakersData.map((item, index) => 
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
