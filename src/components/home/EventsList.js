import React from 'react'
import { FlatList } from 'react-native';
import { Container, Text } from 'native-base';
import PersianJS from 'persianjs';

import EventCard from './EventCard';


const EventsList = (props) => {

    const DATA = [
        {
            id : '1',
            title : 'زردلیمه',
            gender : 'F',
            date : PersianJS('26').englishNumber().toString() + ' ' +  'فروردین',
            length: PersianJS('3').englishNumber().toString(),
            image_url: "../../../assets/img/samples/ZardLimeh.jpg"
        },
        {
            id : '2',
            title : 'قله‌ی کله قندی',
            gender : 'M',
            date : PersianJS('4').englishNumber().toString() + ' ' +  'اردیبهشت',
            length: PersianJS('1').englishNumber().toString(),
            image_url: "../../../assets/img/samples/KalleGhandi.jpg"
        },
        {
            id : '3',
            title : 'غار گل زرد',
            gender : 'F',
            date : PersianJS('11').englishNumber().toString() + ' ' +  'آبان',
            length: '1',
            image_url: "../../../assets/img/samples/GoleZard.jpg"
        },
    ]

    return(
        <Container style={{backgroundColor: 'transparent'}}>
            <FlatList 
                style = {{marginBottom: 10}}
                data={DATA}
                renderItem={({item}) => <EventCard
                                            title={item.title}
                                            gender={item.gender}
                                            date={item.date}
                                            length={item.length} 
                                            image_url={item.image_url}
                                        />}
                keyExtractor={item => item.id}
            />
        </Container>
    )
}

export default EventsList

