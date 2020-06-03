import React, {Component} from 'react'
import { Container, Text, View, Button, Content } from 'native-base';
import {StyleSheet, Image, ImageBackground} from "react-native";
import SquareThumbnail from '../components/event/SquareThumbnail';
import {LinearGradient} from 'expo-linear-gradient'


function GenderText(gender) {
    if (gender === 'M'){
        return 'Male'
    }
    return 'Female'
  }
  function GenderIcon(gender) {
    if (gender === 'M'){
        return 'male'
    }
    return 'female'
  }

export default class EventScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Event Name",
            gender: "M",
            date: "Date",
            length: "Length",
            coordinator: "Coordinator",
            difficulty: "Difficulty",
            description: "Description",
            gatheringDate: "Gathering Session",
            image_url: require("../../assets/img/samples/KalleGhandi.jpg")
        };
    }
    render() {
        const {
            title,
            gender,
            date,
            length,
            coordinator,
            difficulty,
            description,
            gatheringDate,
            image_url
        } = this.state;
        return(
            <Container style={{backgroundColor:'#FAFAFAFF'}}>
                    <View style={styles.EventDescription_Image}>
                        <ImageBackground source={image_url} style={styles.Image}>
                            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                <LinearGradient
                                    colors={['#FAFAFA00', '#FAFAFA10', '#FAFAFAFF']}
                                    style={styles.LinearGradient}
                                    />
                                <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: '#FAFAFAFF',
                                    textAlign: 'center'
                                    }}>
                                    {title}
                                    </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.EventDescription_Thumbnails}>
                    <View style={styles.SquareThumbnail}>
                            <SquareThumbnail inputText={date} name='calendar'/>
                        </View>
                        <View style={styles.SquareThumbnail}>
                            <SquareThumbnail inputText={GenderText(gender)} name='user'/>
                        </View>
                        <View style={styles.SquareThumbnail}>
                            <SquareThumbnail inputText={length} name='clock'/>
                        </View>
                    </View>

                    <View style={styles.EventDescription_Text}>
                        <Text style={styles.Text}>{description}</Text>
                                <Text style={styles.Text}>{"\n"}{gatheringDate}</Text>
                    </View>

                    <View style={styles.EventDescription_FooterThumbnails}>
                        <View style={styles.SquareThumbnail}>
                            <SquareThumbnail inputText={difficulty} isFooter name='link'/>
                        </View>
                        <View style={styles.SquareThumbnail}>
                            <SquareThumbnail inputText={coordinator} isFooter name='user-following'/>
                        </View>
                    </View>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    LinearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },

    Image: {
        height: '100%', 
        width: undefined,
        flex: 1,
    },

    SquareThumbnail: {
        borderWidth: 0.2,
        borderColor: '#6B8E2325',
        flex: 1,
    },
    
    Text: {
        fontSize: 16,
    },

    EventDescription_Image: {
        flex: 6
    },

    EventDescription_Thumbnails: {
        padding: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        flex: 1
    },

    EventDescription_Text: {
        flex: 3
    },

    EventDescription_FooterThumbnails: {
        flex: 1,
    }
  });