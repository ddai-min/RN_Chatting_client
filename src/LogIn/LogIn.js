import React, {useState} from 'react';
import {
    Badge,
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Footer,
    Form,
    Header,
    Input,
    Item,
    Left,
    Right,
    Text
} from 'native-base';
import { StyleSheet } from 'react-native';

import axios from 'axios';

const HOST = "172.30.1.26:3000";

export default function LogIn({navigation}) {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [idError, setIdError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmmit = async () => {
        var idValid = false;
        if (id.length == 0) {
            setIdError("ID를 입력하세요.");
        } else if (id.length <= 5) {
            setIdError("ID를 6자 이상 입력하세요.");
        } else if (id.indexOf(' ') >= 0) {
            setIdError("띄어쓰기가 포함되어 있습니다.");
        } else {
            setIdError("")
            idValid = true
        }
        var passwordValid = false;
        if (password.length == 0) {
            setPasswordError("Password를 입력하세요.");
        } else if (password.indexOf(' ') >= 0) {
            setPasswordError("띄어쓰기가 포함되어 있습니다.");
        } else {
            setPasswordError("")
            passwordValid = true
        }

        if (idValid && passwordValid) {
            navigation.navigate("FriendIndex")
            // try {
            //     let res = await axios.get(`http://${HOST}/membership/${id}`);
            //     alert(res);
            //     // if (res.body == id) {
            //     //     navigation.navigate("Category")

            //     //     setId("");
            //     //     setPassword("");
            //     // } else {
            //     //     alert("입력한 아이디 또는 비밀번호가 일치하지 않습니다.");
            //     // }
            // } catch(err) {
            //     alert(err);
            // }
        }
    }

    return (
        <Container>
            <Header style={styles.container}>
                <Text style={styles.headTextStyle}>로그인</Text>
            </Header>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="ID 입력" onChangeText={text => setId(text)} value={id}></Input>
                    </Item>
                    {
                        idError.length > 0 && <Badge danger>
                                <Text>{idError}</Text>
                            </Badge>
                    }
                    <Item last>
                        <Input
                            placeholder="Password 입력"
                            onChangeText={text => setPassword(text)}
                            value={password}></Input>
                    </Item>
                    {
                        passwordError.length > 0 && <Badge danger>
                                <Text>{passwordError}</Text>
                            </Badge>
                    }
                </Form>
            </Content>
            <Card>
                <CardItem>
                    <Left>
                        <Text note style={styles.textStyle}>회원이 아니신가요?</Text>
                    </Left>
                    <Right>
                        <Button style={styles.tinyButton,styles.container}
                        onPress={() => {
                        navigation.navigate("Membership")}}>
                            <Text>회원가입</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
            <Footer>
                <Content>
                    <Button full onPress={handleSubmmit}>
                        <Text>로그인</Text>
                    </Button>
                </Content>
            </Footer>
        </Container>
    );
}

const styles=StyleSheet.create({
    tinyButton:{
        width:80,
        height:30
    },
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:20
    },
    headTextStyle:{
        fontSize:25
    }
});