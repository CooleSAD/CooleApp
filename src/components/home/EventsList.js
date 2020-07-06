import React from "react";
import { FlatList } from "react-native";
import { Container, Text } from "native-base";
import PersianJS from "persianjs";
import moment from "jalali-moment";

import EventCard from "./EventCard";

function getProcessedData(data) {
  let processedData = [];
  data.forEach((event) => {
    processedData.push({
      id: event.id.toString(),
      title: event.name,
      length: PersianJS(event.length).englishNumber().toString(),
      image_url: require("../../../assets/img/samples/ZardLimeh.jpg"),
      date:
        PersianJS(moment(event.date).locale("fa").format("D"))
          .englishNumber()
          .toString() +
        " " +
        moment(event.date).locale("fa").format("MMMM"),
      gender: event.gender,
    });
  });
  return processedData;
}

const EventsList = ({ navigation, data }) => {
  let DATA = getProcessedData(data);
  return (
    <Container style={{ backgroundColor: "transparent" }}>
      <FlatList
        style={{ marginBottom: 10 }}
        data={DATA}
        renderItem={({ item }) => (
          <EventCard
            title={item.title}
            gender={item.gender}
            date={item.date}
            length={item.length}
            image_url={item.image_url}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default EventsList;
