import React from 'react';
import {
    Container,
    Content,
    Header,
    Text
} from 'native-base';
import {StyleSheet} from 'react-native';
import RecommendKind from './RecommendKind';

export default function Recommend({navigation}) {
    return (
        <Container>
            <Header alignItems='center'>
                <Text style={styles.textStyle}>친구 추천 목록</Text>
            </Header>
            <Content>
                <RecommendKind></RecommendKind>
            </Content>
        </Container>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:25
    }
});