import React, {Component} from 'react'
import { Container, Text } from 'native-base';
import EventsList from '../components/home/EventsList'

export default class HomeScreen extends Component {
    render() {
        return(
            <Container>
                <EventsList/>
            </Container>
        )
    }
}