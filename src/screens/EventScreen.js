import React, { Component } from "react";
import { Container, Text, View, Button } from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PersianJS from "persianjs";

import SquareThumbnail from "../components/event/SquareThumbnail";
import EventFooterItem from "../components/event/EventFooterItem";

function GenderText(gender) {
  if (gender === "M") {
    return "پسران";
  }
  return "دختران";
}

function GenderIcon(gender) {
  if (gender === "M") {
    return "user";
  }
  return "user-female";
}

export default class EventScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      date,
      gender,
      length,
      image_url,
      description,
      coordination_date,
      difficulty_level,
      coordinator,
      coordinator_phone_number,
    } = this.props.route.params;
    return (
      <Container style={{ backgroundColor: "#FAFAFAFF" }}>
        <View style={styles.EventDescription_Image}>
          <ImageBackground source={{ uri: image_url }} style={styles.Image}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <LinearGradient
                colors={["#FAFAFA00", "#FAFAFA10", "#FAFAFAFF"]}
                style={styles.LinearGradient}
              />
              <View style={styles.EnrollButtonContainer}>
                <Button style={styles.EnrollButton} info>
                  <Text style={styles.EnrollButtonText}>شرکت در رویداد</Text>
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.EventDescription_Thumbnails}>
          <View style={styles.SquareThumbnail}>
            <SquareThumbnail inputText={date} name="calendar" />
          </View>
          <View style={styles.SquareThumbnail}>
            <SquareThumbnail
              inputText={GenderText(gender)}
              name={GenderIcon(gender)}
            />
          </View>
          <View style={styles.SquareThumbnail}>
            <SquareThumbnail inputText={length} name="clock" />
          </View>
        </View>

        <View style={styles.EventDescription_Text}>
          <Text style={styles.Text}>{description}</Text>
          <Text style={styles.Text}>
            {"\n\n"}
            {"زمان جلسه توجیهی : " + coordination_date}
          </Text>
        </View>

        <View style={styles.EventDescription_FooterThumbnails}>
          <View style={styles.SquareThumbnail}>
            <EventFooterItem
              type="difficulty_level"
              content={difficulty_level}
            />
          </View>
          <View style={styles.SquareThumbnail}>
            <EventFooterItem type="coordinator" content={coordinator} />
          </View>
          <View style={styles.SquareThumbnail}>
            <EventFooterItem
              type="coordinator_phone_number"
              content={PersianJS(coordinator_phone_number)
                .englishNumber()
                .toString()}
            />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  LinearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  Image: {
    height: "100%",
    width: undefined,
    flex: 1,
  },

  SquareThumbnail: {
    borderWidth: 0.2,
    borderColor: "#6B8E2325",
    flex: 1,
    justifyContent: "center",
  },

  Text: {
    fontSize: 16,
    fontFamily: "IRANSans",
    textAlign: "center",
  },

  EventDescription_Image: {
    flex: 4,
  },

  EventDescription_Thumbnails: {
    padding: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  EventDescription_Text: {
    flex: 3,
    alignItems: "center",
    paddingTop: 20,
    width: "80%",
    alignSelf: "center",
  },

  EventDescription_FooterThumbnails: {
    flex: 1.5,
  },

  EnrollButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  EnrollButton: {
    marginBottom: 15,
    borderRadius: 20,
  },

  EnrollButtonText: {
    fontSize: 16,
    fontFamily: "IRANSans_bold",
  },
});
