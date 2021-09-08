import React, { Component } from 'react';
import { Container, Content, Text, Footer, Button } from 'native-base';
import { StyleSheet } from 'react-native';

export default function Hello({ navigation }) {
    return (
        <Container>
            <Content alignItems='center' justifyContent='center'>
                <Text style={styles.textStyle}>안녕하세요.</Text>
            </Content>
            <Footer>
                <Content>
                    <Button
                        full
                        onPress={() => {
                            navigation.navigate("LogInIndex")
                        }}>
                        <Text>다음</Text>
                    </Button>
                </Content>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
});