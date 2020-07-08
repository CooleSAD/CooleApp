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

const ListItems = () => {
  return (
    <Container>
      <Content style={{ width: "100%", alignSelf: "center" }}>
        <Item icon_name="md-person" title="نام مستعار" value="نامشخص"/>
        <Item icon_name="md-male" title="جنسیت" value="آقا"/>
        <Item icon_name="md-business" title="شهر" value="نامشخص"/>
        <Item icon_name="md-car" title="دارای خودرو" value="خیر"/>
        
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
