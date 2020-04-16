import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Button, Text, H1 } from 'native-base';
import { StyleSheet } from 'react-native';

import TextInput from '../components/login/TextInput';


export default class LoginScreen extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Header/>
                <Content contentContainerStyle={styles.content}>
                    <H1>Create Account</H1>
                    <Form>
                        <Item inlineLabel>
                            <TextInput label="email"/>
                        </Item>
                        <Item>
                            <TextInput label="password"/>
                        </Item>
                        <Button block light>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        width : '100%'
    },
    content : {
        flex : 1,
        justifyContent : 'center',
        width : '80%',
        alignSelf : 'center' 
    }
})