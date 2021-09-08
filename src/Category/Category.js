import React, { useState } from 'react';
import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    Header,
    ListItem,
    Text,
    CheckBox
} from 'native-base';
import { StyleSheet } from 'react-native';

export default function Category({ navigation }) {
    const [checked, setChecked] = useState(false);
    return (
        <Container>
            <Header alignItems='center'>
                <Text style={styles.textStyle}>카테고리를 선택해주세요.</Text>
            </Header>
            <Content>
                <ListItem>
                    <CheckBox
                        checked={false}
                        onPress={() => setChecked(!checked)}></CheckBox>
                    <Body>
                        <Text>언어를 배우고 싶어요</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox
                        checked={false}
                        onPress={() => setChecked(!checked)}></CheckBox>
                    <Body>
                        <Text>여행에 관심 있어요</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox
                        checked={false}
                        onPress={() => setChecked(!checked)}></CheckBox>
                    <Body>
                        <Text>스포츠에 관심 있어요</Text>
                    </Body>
                </ListItem>
            </Content>
            <Footer>
                <Content>
                    <Button full
                        onPress={() => { navigation.reset({ routes: [{ name: "FriendIndex" }] }) }}>
                        <Text>다음</Text>
                    </Button>
                </Content>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});