import React from 'react'
import { FlatList } from 'react-native';
import { Container, Text } from 'native-base';
import PersianJS from 'persianjs';

import EventCard from './EventCard';

const EventsList = (props) => {

    const DATA = [
        {
            id : '1',
            title : 'قله ی خر',
            gender : 'دخترانه',
            date : PersianJS('12').englishNumber().toString() + ' ' +  'آبان'
        },
        {
            id : '2',
            title : 'قله ی خر',
            gender : 'دخترانه',
            date : PersianJS('12').englishNumber().toString() + ' ' +  'آبان'
        },
        {
            id : '3',
            title : 'قله ی خر',
            gender : 'دخترانه',
            date : PersianJS('12').englishNumber().toString() + ' ' +  'آبان'
        },
    ]

    return(
        <Container>
            <FlatList
                data={DATA}
                renderItem={({item}) => <EventCard title={item.title} gender={item.gender} date={item.date}/>}
                keyExtractor={item => item.id}
            />
        </Container>
    )
}

export default EventsList