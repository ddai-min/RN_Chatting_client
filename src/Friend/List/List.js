import React from 'react';
import {
    Container,
    Content,
    Header,
    Text
} from 'native-base';
import { StyleSheet } from 'react-native';
import ListKind from './ListKind';

export default function List({ navigation }) {
    return (
        <Container>
            <Header alignItems='center'>
                <Text style={styles.textStyle}>친구 목록</Text>
            </Header>
            <Content>
                <ListKind></ListKind>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});