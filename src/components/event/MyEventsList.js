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
import { requestCancelEnrollEvent } from "../../utils/requests/events";

const EventItem = ({ name, date, id, cancelEvent, token }) => {
  function cancelEnroll(id) {
    requestCancelEnrollEvent(token, id)
    .then((res) => {
      cancelEvent(id)
    })
    .catch((err) => console.warn(err))
  }

  return (
    <ListItem noIndent>
      <Left>
        <Button style={styles.refuseButton} danger>
          <Text onPress={() => cancelEnroll(id)} style={styles.text}>
            انصراف
          </Text>
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

const MyEventsList = ({ events, cancelEvent, token }) => {
  return (
    <Content>
      <Separator bordered>
        <Text style={styles.separatorText}>رویداد های پیش رو</Text>
      </Separator>
      {events.map((event) => {
        return (
          <EventItem
            token={token}
            key={event.id}
            id={event.id}
            cancelEvent={cancelEvent}
            name={event.name}
            date={persianDate(event.date)}
          />
        );
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
    fontSize: 18,
  },
  separatorText: {
    fontFamily: "IRANSans_medium",
    fontSize: 14,
    marginRight: 10,
  },
  enterButton: {
    width: 80,
    justifyContent: "center",
    marginLeft: 10,
  },
  refuseButton: {
    width: 80,
    justifyContent: "center",
  },
});

export default MyEventsList;
