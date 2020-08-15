import React from "react";
import {
  Content,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";
import PersianJS from "persianjs";

const EventCard = ({ avatar, nickname, item, contact, own, toggleModal, setChosenNeedId, id }) => {
  return (
    <Content style={{ backgroundColor: "#00000009", flex: 1 }}>
      <ListItem
        disabled={!own}
        onPress={() => {
          toggleModal();
          setChosenNeedId(id)
        }}
        noBorder
        avatar
      >
        <Left>
          <Text style={{ fontFamily: "IRANSans_bold" }} note>
            {"تماس: " + PersianJS(contact).englishNumber().toString() + " "}
          </Text>
        </Left>
        <Body>
          <Text style={{ fontFamily: "IRANSans_medium" }}>{item + " "}</Text>
          <Text style={{ alignSelf: "flex-end" }} note>
            {nickname}
          </Text>
        </Body>
        <Right>
          <Thumbnail
            source={require("../../../assets/img/icons/user_icon.png")}
          />
        </Right>
      </ListItem>
    </Content>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
