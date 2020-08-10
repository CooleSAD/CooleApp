import React from "react";
import {
  Content,
  ListItem,
  Button,
  Left,
  Body,
  Right,
  Text,
  Separator,
  Icon
} from "native-base";
import { StyleSheet } from "react-native";


const PropertyItem = ({ name, state }) => {

  function getStateText(state) {
      if(state === 'R')
        return <Text style={{fontFamily : 'IRANSans_bold', color:'blue'}}>رزرو شده</Text>
    return <Text style={{fontFamily : 'IRANSans_bold', color:'green'}}>قابل دریافت</Text>
  }  

  return (
    <ListItem noIndent>
      <Left>
        {getStateText(state)}
      </Left>
      <Body>
        <Text style={styles.nameText}>{name}</Text>
      </Body>
      <Right>
        <Icon name='md-cube'/>
      </Right>
    </ListItem>
  );
};

const MyPropertiesList = ({ properties }) => {
  return (
    <Content>
      <Separator bordered>
        <Text style={styles.separatorText}>رزرو شده ها</Text>
      </Separator>
      {properties.filter((property) => property.state === 'R').map((property) => {
        return (
          <PropertyItem
            key={property.id}
            name={property.name}
            state={property.state}
          />
        );
      })}
      <Separator bordered>
        <Text style={styles.separatorText}>قابل دریافت ها</Text>
      </Separator>
      {properties.filter((property) => property.state === 'C').map((property) => {
        return (
          <PropertyItem
            key={property.id}
            name={property.name}
            state={property.state}
          />
        );
      })}
    </Content>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "IRANSans_medium",
  },
  nameText: {
    fontFamily: "IRANSans_bold",
    fontSize: 18,
  },
  separatorText: {
    fontFamily: "IRANSans_medium",
    fontSize: 14,
    marginRight: 10,
  },
});

export default MyPropertiesList;
