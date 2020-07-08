import React from 'react'
import { View, Text } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

function getIcon(type) {
    if(type == 'difficulty_level') 
        return <FAIcon style={styles.icon} name='mountain' size={16}/>
    else if(type == 'coordinator')
        return <FAIcon style={styles.icon} name='user-alt' size={18}/>
    else if(type =='coordinator_phone_number')
        return <FAIcon style={styles.icon} name='mobile' size={18}/>
}

function getTitle(type) {
    if(type == 'difficulty_level') 
        return "درجه سختی"
    else if(type == 'coordinator')
        return "مسئول هماهنگی"
    else if(type =='coordinator_phone_number')
        return "شماره تماس مسئول"
}


const EventFooterItem = ({type, content}) => {
    return (
        <View style={{flexDirection:'row-reverse', justifyContent:'space-between', width:'85%', alignSelf:'center'}}>
            <View style={{flexDirection:'row-reverse', width:'50%', alignItems:'center'}}>
                {getIcon(type)}
                <Text style={styles.text}>{getTitle(type)}</Text>
            </View>
            <View style={{alignItems:'center', width:'40%'}}>
                <Text style={styles.text}>{content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        fontFamily:'IRANSans_medium',
        color: "#6B8E23FF"
    },
    icon : {
        marginLeft: 5,
        color : "#055915"
    }
})


export default EventFooterItem