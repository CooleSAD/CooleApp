import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Left, Right, Body, Text, Content } from "native-base";
import { connect } from "react-redux";

import { navigateToEvent } from "../../redux/actions/home";

function GenderIcon(gender) {
  if (gender === "M") {
    return (
      <Image
        source={require("../../../assets/img/icons/male_icon.png")}
        style={styles.GenderIcon}
      />
    );
  }
  return (
    <Image
      source={require("../../../assets/img/icons/female_icon.png")}
      style={styles.GenderIcon}
    />
  );
}

const EventCard = ({
  id,
  title,
  date,
  gender,
  length,
  image_url,
  description,
  coordination_date,
  difficulty_level,
  coordinator,
  coordinator_phone_number,
  navigation,
  navigateToEvent,
}) => {
  return (
    <Content style={{ marginVertical: 1, width: "95%", alignSelf: "center" }}>
      <Card style={{ borderRadius: 25 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigateToEvent(title);
            navigation.navigate("Event", {
              id,
              title,
              date,
              gender,
              length,
              image_url,
              description,
              coordination_date,
              difficulty_level,
              coordinator,
              coordinator_phone_number,
            });
          }}
        >
          <CardItem bordered cardBody style={styles.ImageCardItem}>
            <Image
              resizeMode={"cover"}
              source={{ uri: image_url }}
              style={styles.Image}
            />
          </CardItem>
        </TouchableOpacity>
        {/* stretch, fit, center, repeat, cover, contain */}
        <CardItem bordered style={styles.TextCardItem}>
          <Left style={{ flexDirection: "row", flex: 1 }}>
            {GenderIcon(gender)}
            <Text
              style={{
                fontFamily: "IRANSans_medium",
                fontSize: 12,
                marginTop: 5,
              }}
            >
              {date}
            </Text>
          </Left>
          <Right style={{ flex: 1, paddingRight: 5 }}>
            <Text style={{ fontFamily: "IRANSans_bold", fontSize: 16 }}>
              {title}
            </Text>
            <Text
              note
              style={{ fontFamily: "IRANSans_medium", color: "#020202FF" }}
            >
              {length}
            </Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navigateToEvent: (title) => dispatch(navigateToEvent(title)),
});

export default connect(null, mapDispatchToProps)(EventCard);

const styles = StyleSheet.create({
  ImageCardItem: {
    backgroundColor: "transparent",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 200,
    width: null,
  },

  TextCardItem: {
    backgroundColor: "transparent",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  GenderIcon: {
    height: 35,
    width: 35,
  },

  Image: {
    height: "100%",
    width: undefined,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
