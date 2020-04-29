import React from "react";
import { Image, StyleSheet } from "react-native";
import { Card, CardItem, Left, Right, Body, Text, Content } from "native-base";
import FastImage from 'react-native-fast-image'
function GenderIcon(gender) {
  if (gender === 'M'){
      return <Image
      source={require("../../../assets/img/icons/male_icon.png")}
      style={{ height: 35, width: 35}}
    />
  }
  return <Image
  source={require("../../../assets/img/icons/female_icon.png")}
  style={{ height: 35, width: 35}}
/>
}



const EventCard = ({ title, date, gender, length, image_url}) => {
  return (
    <Content style={{marginVertical : 10 , width : '100%', alignSelf:'center', backgroundColor: '#438C23AB'}}>
      <Card style={{backgroundColor:'transparent'}} >
        <CardItem cardBody style={{backgroundColor:'transparent'}}>
          <Image
            // source={{uri: image_url}}
            source = {require("../../../assets/img/samples/KalleGhandi.jpg")}
            style={{ height: 200, width: null, flex: 1, backgroundColor: 'transparent' }} //replace bg color with image
          />

          {/* <FastImage
            source = {{uri: image_url,}}
            style={{ height: 200, width: null, flex: 1 }}
          />  */}
        </CardItem> 

        <CardItem style={{backgroundColor: 'transparent'}}> 

          <Left style={{flexDirection: 'row', flex: 1}}>
            {GenderIcon(gender)}
            <Text style={{fontFamily: "IRANSans_medium", fontSize : 12, marginTop:5}}>{date}</Text>
          </Left>

          <Right style = {{flex: 1, paddingRight: 5}}>
            <Text style={{ fontFamily: "IRANSans_bold", fontSize : 16 }}>{title}</Text>
            <Text style={{fontFamily: "IRANSans_medium", fontSize : 14}}>{length + ' ' + 'شب'}</Text>
          </Right>

        </CardItem>
      </Card>
    </Content>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  Transparent: {
    backgroundColor: "transparent",
  },
});