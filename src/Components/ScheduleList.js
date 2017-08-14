import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs, List, ListItem } from 'native-base';

import Row from './Row.js';
import SeparatorRow from './SeparatorRow.js';
// import {dia1} from '../data.js';
import styled from 'styled-components/native';
import {gold, blue, skyblue, gray, white } from '../colors.js';

const dia1 = [
    {
        id: 1,
        type: 'module',
        text: 'Módulo I: Metastasis vertebral',
        hour: '09:00 - 12:30'
    },
    {
        id: 2,
        type: 'card',
        text: 'Caso Clínico',
        hour: '09:00- 09:03',
        category: 'Presentación'
    },
    {
        id: 3,
        type: 'card',
        text: 'Caso clinico de tumor metastasico',
        hour: '09:03- 09:15',
        category: 'Ponencia'
    },
    {
        id: 4,
        type: 'card',
        text: 'Imagenes en metastasis vertebrales',
        hour: '09:15 -09:30',
        category: 'Ponencia'
    },
    {
        id: 5,
        type: 'card',
        text: 'Fractura patologica: diagnostico diferencial',
        hour: '09:30 - 09:45',
        category: 'Ponencia'
    }
    ,
    {
        id: 6,
        type: 'card',
        text: 'Escalas de evaluacion de mestastasis',
        hour: '09:45- 10:00',
        category: 'Ponencia'
    },
    {
        id: 7,
        type: 'card',
        text: 'Inestabilidad de la columna en metastasis',
        hour: '10:00 - 10:15',
        category: 'Ponencia'
    },
    {
        id: 8,
        type: 'card',
        text: 'Solucion del caso clinco',
        hour: '10:15 - 10:30',
        category: 'Discusion'
    },
     {
        id: 9,
        type: 'module',
        text: 'COFFEE BREAK',
        hour: '10:30 - 11:00'
    },
    {
        id: 10,
        type: 'card',
        hour: '11:00 - 11:03',
        text: 'Caso clínico',
        category: 'Presentacion'
    },
    {
        id: 11, // 11:03	11:15	Ponencia	Tumor metastasico epidural
        type: 'card',
        hour: '11:03 - 11:15',
        text: 'Tumor metastasico epidural',
        category: 'Ponencia'
    },
    {
        id: 12, // 11:15	11:30	Ponencia	Decisión de tratamiento en enfermedad metastasica
        type: 'card',
        hour: '11:15 - 11:30',
        text: 'Decisión de tratamiento en enfermedad metastasica',
        category: 'Ponencia'
    },
    {
        //11:30	11:45	Ponencia	Tratamiento quirurgico
        id: 13,
        type: 'card',
        hour: '11:30 - 11:45',
        text: 'Tratamiento quirurgico',
        category: 'Ponencia'
    },
    {
        // 11:45	12:00	Ponencia	Vertebrectomia, cuando procede
        id: 14,
        type: 'card',
        hour: '11:45 - 12:00',
        text: 'Vertebrectomia, cuando procede',
        category: 'Ponencia'
    },
    {
        // 12:00	12:15	Ponencia	Vertebroplastia es una alternativa?
        id: 15,
        type: 'card',
        hour: '12:00 - 12:15',
        text: 'Vertebroplastia es una alternativa?',
        category: 'Ponencia'
    },
    {
        // 12:15	12:30	Discusion 	Resolución del caso clinico
        id: 16,
        type: 'card',
        hour: '12:15 - 12:30',
        text: 'Resolución del caso clinico',
        category: 'Discusion'
    },
     {
        id: 17,
        type: 'module',
        text: 'ALMUERZO',
        hour: '12:30 - 14:00'
    },
    {
        id: 18,
        type: 'module',
        text: 'Módulo III: Tumores primarios vertebrales',
        hour: '14:00 - 17:20'
    },
     {
        // 14:00	14:05	Presentacion	Caso clínico 
        id: 19,
        type: 'card',
        text: 'Caso clínico',
        hour: '14:00 - 14:05',
        category: 'Presentacion'
    },
    {
        // 14:05	14:10	Ponencia	Cuadro clinico de tumores primarios
        id: 20,
        type: 'card',
        text: 'Cuadro clinico de tumores primarios',
        hour: '14:05	14:10',
        category: 'Ponencia'
    },
    {
        // 14:10	14:25	Ponencia	Estadificación local y sistemica de la lesión
        id: 21,
        type: 'card',
        text: 'Estadificación local y sistemica de la lesión',
        hour: '14:10	14:25',
        category: 'Ponencia'
    },
    {
        // 14:25	14:40	Ponencia	Tratamiento quirurgico
        id: 22,
        type: 'card',
        text: 'Tratamiento quirurgico',
        hour: '14:25	14:40',
        category: 'Ponencia'
    },
    {
        // 14:40	14:55	Ponencia	Reconstrucion vertebral
         id: 23,
        type: 'card',
        text: 'Reconstrucion vertebral',
        hour: '14:40	14:55',
        category: 'Ponencia'
    },
    {
        // 14:55	15:10	Ponencia	Resolución del caso clinico
         id: 24,
        type: 'card',
        text: 'Resolución del caso clinico',
        hour: '14:55	15:10',
        category: 'Ponencia'
    },
     {
        // 15:10	15:25	Discusion
         id: 25,
        type: 'card',
        text: 'Discusion',
        hour: '15:10	15:25',
        category: 'Discusion'
    },
     {
        id: 26,
        type: 'module',
        text: 'COFFEE BREAK',
        hour: '15:25	16:00'
    },
     {
        // 16:00	16:04	Presentacion	Caso Clinico
         id: 27,
        type: 'card',
        text: 'Caso Clinico',
        hour: '16:00	16:04',
        category: 'Presentacion'
    },
     {
        // 16:04	16:15	Lecture	Tumores primarios sacros
         id: 28,
        type: 'card',
        text: 'Tumores primarios sacros',
        hour: '16:04	16:15',
        category: 'Lecture'
    },
     {
        // 16:15	16:30	Lecture	Cordoma: un reto
         id: 29,
        type: 'card',
        text: 'Cordoma: un reto',
        hour: '16:15	16:30',
        category: 'Lecture'
    },
     {
        // 16:30	16:45	Discusion	Resolución del caso clinico
         id: 30,
        type: 'card',
        text: 'Resolución del caso clinico',
        hour: '16:30	16:45',
        category: 'Discusion'
    },
     {
        id: 31,
        type: 'module',
        text: 'CIERRE',
        hour: '16:45	17:00'
    },


];




export default class ScheduleList extends React.PureComponent {

    renderItem = ({ item }) => <Item {...item} />;

    keyExtractor = (item, index) => item.id;

    render() {
        return (
            <FlatList
                data={dia1}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

const ModuleWrapper = styled(View) `
    background-color: ${gray};
    padding-vertical: 30px;
    margin-bottom: 10px;
    align-items: center;
    border-color: #ddd;
    border-width: 1px;
    
`;

const ModuleText = styled(Text) `
    font-size: 20px;
    font-weight: bold;
    color: ${blue};
`;

const Module = ({ text, hour }) => (
    <ModuleWrapper>
        <ModuleText>{text}</ModuleText>
        <Text>{hour}</Text>
    </ModuleWrapper>
)


const CardWrapper = styled(View) `
    border-color: #000;
    border-width: 1px;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 20px;
`;
const TitleWrapper = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const CategoryWrap = styled(Text)`
    border-color: ${gray}
    background-color: ${gray}
    border-width: 1px;
    border-radius: 10px;
    padding: 2px 5px;
    color: ${blue};
    align-self: flex-start;
    margin-top: 5px
`;

const Card = ({ text, hour, category }) => (
    <CardWrapper>
        <TitleWrapper>{text}</TitleWrapper>
        <Text>{hour}</Text>
        <View>
            <CategoryWrap>{category}</CategoryWrap>
        </View>
    </CardWrapper>
)


const Item = (props) => {
    switch (props.type) {
        case 'module':
            return <Module {...props} />
        case 'card':
            return <Card {...props} />
        default:
            return null;
    }
}