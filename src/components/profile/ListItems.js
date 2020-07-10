import React from "react";
import {
  Container,
  Content,
  ListItem,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Button,
} from "native-base";
import { StyleSheet } from "react-native";

const Item = ({ icon_name, title, value }) => {
  return (
    <ListItem style={{ flexDirection: "row-reverse", marginRight: 40, marginVertical:20 }} icon>
      <Left>
        <Button style={{backgroundColor:'#6B8E23FF'}}>
          <Icon name={icon_name} />
        </Button>
      </Left>
      <Body>
        <Text style={styles.text}>{title}</Text>
      </Body>
      <Right>
        <Text style={styles.text}>{value}</Text>
      </Right>
    </ListItem>
  );
};

function getNickname(nickname) {
  if(nickname === "") {
    return "نامشخص"
  }
  return nickname
}

function getGender(gender) {
  if(gender === "" || gender === "M")
    return "آقا"
  return "خانم"
}

function getGenderIcon(gender) {
  if(gender === "" || gender === "M")
    return "md-male"
  return "md-female"
}

function getCity(city) {
  if(city === "") {
    return "نامشخص"
  }
  return city
}

function getHasCar(hasCar) {
  if(hasCar)
    return "بله"
  return "خیر"
}

const ListItems = ({data}) => {
  return (
    <Container style={{ backgroundColor:'#edffef'}}>
      <Content style={{ width: "100%", alignSelf: "center" }}>
        <Item icon_name="md-person" title="نام مستعار" value={getNickname(data.nickname)}/>
        <Item icon_name={getGenderIcon(data.gender)} title="جنسیت" value={getGender(data.gender)}/>
        <Item icon_name="md-business" title="شهر" value={getCity(data.city)}/>
        <Item icon_name="md-car" title="دارای خودرو" value={getHasCar(data.has_car)}/>
        
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
    text : {
        fontFamily: 'IRANSans_medium'
    }
})

export default ListItems;
