import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs, List, ListItem } from 'native-base';

import Row from './Row.js';
import SeparatorRow from './SeparatorRow.js';
// import {dia1} from '../data.js';
import styled from 'styled-components/native';
import {gold, blue, skyblue, gray, white } from '../colors.js';


export default class ScheduleList extends React.PureComponent {

    renderItem = ({ item }) => <Item {...item} />;

    keyExtractor = (item, index) => item.id;

    render() {
        return (
            <FlatList
                data={this.props.data}
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
    flex: 1;
    margin-top: 5px;
    text-align: center;
`;
const Group = styled(View)`
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
`;
const GroupText = styled(Text)`
    flex: 1;
`;


class Card extends React.PureComponent {
    render () {
        const { text, hour, category, author } = this.props;
        return (
            <CardWrapper>
                <TitleWrapper>{text}</TitleWrapper>
                
                <Group>
                    <GroupText>{author}</GroupText>
                    <GroupText>{hour}</GroupText>
                    <CategoryWrap>{category}</CategoryWrap>
                </Group>
            </CardWrapper>
        )
    }
}


class Item extends React.PureComponent {
    render() {
        switch (this.props.type) {
            case 'module':
                return <Module {...this.props} />
            case 'card':
                return <Card {...this.props} />
            default:
                return null;
        }
    }
}

