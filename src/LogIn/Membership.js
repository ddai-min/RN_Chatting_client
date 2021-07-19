import React, { useState } from 'react';
import {Badge, Body, Button, Container, Content, Footer, Header, Input, Item, Left, List, ListItem, Text} from 'native-base';
import { StyleSheet, Alert } from 'react-native';

import axios from 'axios';

import MembershipPicker from './MembershipPicker';

const HOST = "172.30.1.26:3000";

export default function Membership({navigation}){
    const [id, setId] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [name, setName] = useState("")
    // const [gender, setGender] = useState("")
    const [age, setAge] = useState("")

    const [idError, setIdError] = useState("")
    const [password1Error, setPassword1Error] = useState("")
    const [password2Error, setPassword2Error] = useState("")
    const [nameError, setNameError] = useState("")
    // const [genderError, setGenderError] = useState("")
    const [ageError, setAgeError] = useState("")

    const handleSubmmit = () => {
        var idValid = false;
        if (id.length == 0) {
            setIdError("아이디를 입력하세요.");
        } else if (id.length <= 5) {
            setIdError("아이디를 6자 이상 입력하세요.");
        } else if (id.indexOf(' ') >= 0) {
            setIdError("띄어쓰기가 포함되어 있습니다.");
        } else {
            setIdError("")
            idValid = true
        }

        var password1Valid = false;
        if (password1.length == 0) {
            setPassword1Error("비밀번호를 입력하세요.");
        } else if (password1.length <= 7) {
            setPassword1Error("비밀번호를 8자 이상 입력하세요.");
        } else if (password1.indexOf(' ') >= 0) {
            setPassword1Error("띄어쓰기가 포함되어 있습니다.");
        } else {
            setPassword1Error("")
            password1Valid = true
        }

        var password2Valid = false;
        if (password1 == password2) {
            setPassword2Error("입력한 비밀번호가 다릅니다.");
        } else {
            setPassword2Error("")
            password2Valid = true
        }

        var nameValid = false;
        if (name.length == 0) {
            setNameError("이름을 입력하세요.");
        } else if (name.indexOf(' ') >= 0) {
            setNameError("띄어쓰기가 포함되어 있습니다.");
        } else {
            setNameError("")
            nameValid = true
        }

        // var genderValid = false;
        // if (MembershipPicker.state.selected2 == undefined) {
        //     setGenderError("성별을 선택하세요.");
        // } else {
        //     setGenderError("")
        //     genderValid = true
        // }

        var ageValid = false;
        if (age.length == 0) {
            setAgeError("나이를 입력하세요.");
        } else if (age.length >= 3) {
            setAgeError("나이를 정확히 입력하세요.");
        } else if (age.indexOf(' ') >= 0) {
            setAgeError("띄어쓰기가 포함되어 있습니다.");
        } else if (age <= 0 || age >= 100) {
            setAgeError("숫자를 바로 입력하세요.");
        } else {
            setAgeError("")
            ageValid = true
        }

        if (idValid && password1Valid && password2Valid && nameValid && ageValid) {
            const information = {
                id: id,
                password: password1,
                name: name,
                age: age
            }

            axios({
                method:"POST",
                url:`http://${HOST}/membership/`,
                data:information
            }).then((res)=>{
                console.log(res);
            }).catch(error=>{
                console.log(error);
                throw new Error(error);
            });

            
            setId("");
            setPassword1("");
            setPassword2("");
            setName("");
            setAge("");
            navigation.pop();
            Alert.alert(
                "회원가입",
                "회원가입이 완료되었습니다.",
                [
                    {text:"확인"}
                ]
            );
        }
    }

    return(
        <Container>
            <Header style={styles.container}>
                <Text style={styles.headTextStyle}>정보를 입력해주세요.</Text>
            </Header>
            <Content>
                <List>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>아이디</Text>
                        </Left>
                        <Body>
                            <Item regular>
                                <Input
                                placeholder='입력'
                                onChangeText={text => setId(text)}
                                value={id}></Input>
                            </Item>
                            {
                                idError.length > 0 && <Badge danger>
                                    <Text>{idError}</Text>
                                </Badge>
                            }
                        </Body>
                    </ListItem>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>비밀번호</Text>
                        </Left>
                        <Body>
                            <Item regular>
                                <Input
                                placeholder='입력'
                                onChangeText={text => setPassword1(text)}
                                value={password1}></Input>
                            </Item>
                            {
                                password1Error.length > 0 && <Badge danger>
                                    <Text>{password1Error}</Text>
                                </Badge>
                            }
                        </Body>
                    </ListItem>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>비밀번호 확인</Text>
                        </Left>
                        <Body>
                            <Item regular>
                                <Input
                                placeholder='입력'
                                onChangeText={text => setPassword2(text)}
                                value={password2}></Input>
                            </Item>
                            {
                                password2Error.length > 0 && <Badge danger>
                                    <Text>{password2Error}</Text>
                                </Badge>
                            }
                        </Body>
                    </ListItem>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>이름</Text>
                        </Left>
                        <Body>
                            <Item regular>
                                <Input
                                placeholder='입력'
                                onChangeText={text => setName(text)}
                                value={name}></Input>
                            </Item>
                            {
                                nameError.length > 0 && <Badge danger>
                                    <Text>{nameError}</Text>
                                </Badge>
                            }
                        </Body>
                    </ListItem>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>성별</Text>
                        </Left>
                        <Body>
                            <MembershipPicker></MembershipPicker>
                        </Body>
                    </ListItem>
                    <ListItem style={styles.listStyle}>
                        <Left style={styles.container}>
                            <Text style={styles.listTextStyle}>나이</Text>
                        </Left>
                        <Body>
                            <Item regular>
                                <Input
                                placeholder='입력'
                                onChangeText={text => setAge(text)}
                                value={age}></Input>
                            </Item>
                            {
                                ageError.length > 0 && <Badge danger>
                                    <Text>{ageError}</Text>
                                </Badge>
                            }
                        </Body>
                    </ListItem>
                </List>
            </Content>
            <Footer>
                <Content>
                    <Button full onPress={handleSubmmit}>
                        <Text>회원가입</Text>
                    </Button>
                </Content>
            </Footer>
        </Container>
    );
}

const styles=StyleSheet.create({
    headTextStyle:{
        fontSize:25
    },
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    listTextStyle:{
        fontSize:20
    },
    listStyle:{
        height:70
    }
});