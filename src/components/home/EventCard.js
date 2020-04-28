import React from "react";
import { Image } from "react-native";
import { Card, CardItem, Left, Right, Body, Text, Content } from "native-base";

const EventCard = ({ title, date, gender }) => {
  return (
    <Content style={{marginVertical : 10 , width : '95%', alignSelf:'center'}}>
      <Card>
        <CardItem cardBody>
          <Image
            source={require("../../../assets/img/sampleCard.png")}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text style={{ fontFamily: "IRANSans_medium" }}>{date}</Text>
          </Left>
          <Right>
            <Text style={{ fontFamily: "IRANSans_bold", fontSize : 18 }}>{title}</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default EventCard;
