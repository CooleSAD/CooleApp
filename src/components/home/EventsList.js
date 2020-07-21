import React from "react";
import { FlatList } from "react-native";
import { Container, Text } from "native-base";
import PersianJS from "persianjs";
import moment from "jalali-moment";

import EventCard from "./EventCard";
import { BASE_ADDRESS } from "../../utils/api";

function getProcessedData(data) {
  let processedData = [];
  data.forEach((event) => {
    processedData.push({
      id: event.id.toString(),
      title: event.name,
      length: PersianJS(event.length).englishNumber().toString() + " " + "شب",
      image_url: BASE_ADDRESS + event.image,
      date:
        PersianJS(moment(event.date).locale("fa").format("D"))
          .englishNumber()
          .toString() +
        " " +
        moment(event.date).locale("fa").format("MMMM"),
      gender: event.gender,
      description: event.description,
      coordination_date:
        PersianJS(moment(event.coordination_date).locale("fa").format("D"))
          .englishNumber()
          .toString() +
        " " +
        moment(event.coordination_date).locale("fa").format("MMMM"),
        difficulty_level : event.difficulty_level,
        coordinator : event.coordinator,
        coordinator_phone_number : event.coordinator_phone_number
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
            id={item.id}
            title={item.title}
            gender={item.gender}
            date={item.date}
            length={item.length}
            image_url={item.image_url}
            navigation={navigation}
            description={item.description}
            coordination_date={item.coordination_date}
            difficulty_level={item.difficulty_level}
            coordinator={item.coordinator}
            coordinator_phone_number={item.coordinator_phone_number}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default EventsList;
