import React from 'react'
import { FlatList } from 'react-native';
import { Container, Text } from 'native-base';
import PersianJS from 'persianjs';

import ItemCard from './ItemCard';


const ItemsList = (props) => {

    const DATA = [
        {
            id : '1',
            title : 'کوله',
            image_url: "../../../assets/img/samples/bag1.jpg"
        },
        {
            id : '2',
            title : 'کوله',
            image_url: "../../../assets/img/samples/bag2.jpg"
        },
        {
            id : '3',
            title : 'کوله',
            image_url: "../../../assets/img/samples/bag.jpg"
        },
        {
            id : '4',
            title : 'کوله',
            image_url: "../../../assets/img/samples/stick.jpg"
        },
    ]

    return(
        <Container style={{backgroundColor: 'transparent'}}>
            <FlatList 
                style = {{marginBottom: 10}}
                data={DATA}
                numColumns = {2}
                renderItem={({item}) => <ItemCard
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

export default ItemsList