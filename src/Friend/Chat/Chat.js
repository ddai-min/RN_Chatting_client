import React from 'react';
import { Container, Content, Header, Text, List, ListItem, Left, Body, Right } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default function Chat({ navigation }) {
    return (
        <Container>
            <Header alignItems='center'>
                <Text style={styles.textStyle}>채팅 목록</Text>
            </Header>
            <Content>
                <List>
                    <ListItem
                        avatar
                        onPress={() => {
                            navigation.navigate("ChatDetail")
                        }}>
                        <Left>
                            <Image
                                source={require('../img/dog1.png')}
                                style={styles.imageSize} />
                        </Left>
                        <Body>
                            <Text>권택민</Text>
                            <Text note>그래서 어떻게 됐어?</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem
                        avatar
                        onPress={() => {
                            navigation.navigate("ChatDetail")
                        }}>
                        <Left>
                            <Image
                                source={require('../img/dog2.png')}
                                style={styles.imageSize} />
                        </Left>
                        <Body>
                            <Text>친구 2</Text>
                            <Text note>아 그래?</Text>
                        </Body>
                        <Right>
                            <Text note>5:24 pm</Text>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    imageSize: {
        width: 50,
        height: 50
    }
});