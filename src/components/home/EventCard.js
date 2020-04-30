import React from "react";
import { Image, StyleSheet } from "react-native";
import { Card, CardItem, Left, Right, Body, Text, Content } from "native-base";
import FastImage from 'react-native-fast-image'

function GenderIcon(gender) {
  if (gender === 'M'){
      return <Image
      source={require("../../../assets/img/icons/male_icon.png")}
      style={styles.GenderIcon}
    />
  }
  return <Image
  source={require("../../../assets/img/icons/female_icon.png")}
  style={styles.GenderIcon}
/>
}



const EventCard = ({ title, date, gender, length, image_url}) => {
  return (
    <Content style={{marginVertical : 1 , width : '99%', alignSelf:'center'}}>
      <Card style={{backgroundColor: '#FFFFFF33', borderRadius: 30 }} >
        <CardItem bordered cardBody style={styles.ImageCardItem}>
          <Image resizeMode={"cover"} source = {image_url} style={styles.Image}/>
        </CardItem> 
         {/* stretch, fit, center, repeat, cover, contain */}
        <CardItem bordered style={styles.TextCardItem}> 
          <Left style={{flexDirection: 'row', flex: 1}}>
            {GenderIcon(gender)}
            <Text style={{fontFamily: "IRANSans_medium", fontSize : 12, marginTop:5}}>{date}</Text>
          </Left>
          <Right style = {{flex: 1, paddingRight: 5}}>
            <Text style={{fontFamily: "IRANSans_bold", fontSize : 16 }}>{title}</Text>
            <Text note style={{fontFamily: "IRANSans_medium", color: '#020202FF'}}>{length + ' ' + 'شب'}</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  ImageCardItem: {
    backgroundColor: 'transparent', borderTopLeftRadius: 25,  borderTopRightRadius: 25,
    height: 200,
    width: null,
  },

  TextCardItem: {
    backgroundColor: 'transparent', borderBottomLeftRadius: 25, borderBottomRightRadius: 25,
  },

  GenderIcon:{
    height: 35,
    width: 35,
  },

  Image: {
    height: '100%', 
    width: undefined,
    flex: 1,
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25,
  }

});