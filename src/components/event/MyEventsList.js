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
} from "native-base";
import { StyleSheet } from "react-native";

import persianDate from "../../utils/useful/persianDate";

const EventItem = ({ name, date }) => {
  return (
    <ListItem noIndent>
      <Left>
        <Button style={styles.refuseButton} danger>
          <Text style={styles.text}>انصراف</Text>
        </Button>
        <Button style={styles.enterButton} info>
          <Text style={styles.text}>ورود</Text>
        </Button>
      </Left>
      <Body>
        <Text style={styles.nameText}>{name}</Text>
      </Body>
      <Right>
        <Text style={styles.text}>{date}</Text>
      </Right>
    </ListItem>
  );
};

const MyEventsList = ({ events }) => {
  return (
    <Content>
      <Separator bordered>
        <Text style={styles.separatorText}>رویداد های پیش رو</Text>
      </Separator>
      {events.map((event, index) => {
        return <EventItem name={event.name} date={persianDate(event.date)} />;
      })}
      <Separator bordered>
        <Text style={styles.separatorText}>رویداد در حال اجرا</Text>
      </Separator>
      <Separator bordered>
        <Text style={styles.separatorText}>رویداد های تمام شده</Text>
      </Separator>
    </Content>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "IRANSans_medium",
  },
  nameText: {
    fontFamily: "IRANSans_bold",
    fontSize: 18
  },
  separatorText: {
    fontFamily: "IRANSans_medium",
    fontSize: 14,
    marginRight: 10,
  },
  enterButton: {
    width : 80,
    justifyContent : 'center',
    marginLeft : 10
  },
  refuseButton : {
    width : 80,
    justifyContent : 'center'
  }
});

export default MyEventsList;
