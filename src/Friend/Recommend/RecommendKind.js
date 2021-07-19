import React from 'react';
import {List, ListItem, Left, Body, Right, Text, Button} from 'native-base';
import {Image, StyleSheet} from 'react-native';

export default function RecommendKind({navigation}) {
    return (
        <List>
            <ListItem thumbnail>
                <Left>
                    <Image
                    source={require('../img/lego.png')}
                    style={styles.imageSize} />
                </Left>
                <Body>
                    <Text>박우현</Text>
                    <Text note numberOfLines={1}>친하게 지내고싶어요.</Text>
                </Body>
                <Right>
                    <Button transparent
                    onPress={()=>{navigation.navigate("RecommendDetail")}}>
                        <Text>자세히 보기</Text>
                    </Button>
                </Right>
            </ListItem>
            <ListItem thumbnail>
                <Left>
                    <Image
                    source={require('../img/mango.png')}
                    style={styles.imageSize} />
                </Left>
                <Body>
                    <Text>오채연</Text>
                    <Text note numberOfLines={1}>만나서 반갑습니다.</Text>
                </Body>
                <Right>
                    <Button transparent
                    onPress={()=>{navigation.navigate("RecommendDetail")}}>
                        <Text>자세히 보기</Text>
                    </Button>
                </Right>
            </ListItem>
            <ListItem thumbnail>
                <Left>
                    <Image
                    source={require('../img/lingo.png')}
                    style={styles.imageSize} />
                </Left>
                <Body>
                    <Text>김현우</Text>
                    <Text note numberOfLines={1}>안녕하세요.</Text>
                </Body>
                <Right>
                    <Button transparent
                    onPress={()=>{navigation.navigate("RecommendDetail")}}>
                        <Text>자세히 보기</Text>
                    </Button>
                </Right>
            </ListItem>
        </List>
    );
}

const styles=StyleSheet.create({
    imageSize:{
        width:50,
        height:50
    }
})