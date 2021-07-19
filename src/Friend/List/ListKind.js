import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Body, Card, Left, ListItem, Text} from 'native-base';

export default function ListKind(){
    return(
        <Card>
            <ListItem>
                <Left>
                    <Body style={styles.container2}>
                        <Image
                        source={require('../img/dog2.png')}
                        style={styles.imageSize} />
                        <Text>장수빈</Text>
                    </Body>
                </Left>
                <Body style={styles.container1}>
                    <Text style={styles.saying}>안녕하세요.</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Left>
                    <Body style={styles.container2}>
                        <Image
                        source={require('../img/dog1.png')}
                        style={styles.imageSize} />
                        <Text>권택민</Text>
                    </Body>
                </Left>
                <Body style={styles.container1}>
                    <Text style={styles.saying}>반갑습니다.</Text>
                </Body>
            </ListItem>
        </Card>
    )
}

const styles=StyleSheet.create({
    imageSize:{
        width:50,
        height:50
    },
    container1:{
        justifyContent:'center',
    },
    container2:{
        alignItems:'center'
    },
    saying:{
        fontSize:20
    }
});