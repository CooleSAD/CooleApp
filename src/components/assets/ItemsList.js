import React from "react";
import { FlatList } from "react-native";
import { Container, Text } from "native-base";

import ItemCard from "./ItemCard";

const ItemsList = (props) => {
  const DATA = [
    {
      id: "1",
      title: "کوله",
      image_url: "../../../assets/img/samples/bag1.jpg",
      price: "18000"
    },
    {
      id: "2",
      title: "کوله",
      image_url: "../../../assets/img/samples/bag2.jpg",
      price: "10000"
    },
    {
      id: "3",
      title: "کوله",
      image_url: "../../../assets/img/samples/bag.jpg",
      price: "25000"
    },
    {
      id: "4",
      title: "کوله",
      image_url: "../../../assets/img/samples/stick.jpg",
      price: "30000"
    },
  ];

  return (
    <Container style={{ backgroundColor: "transparent" }}>
      <FlatList
        style={{ marginBottom: 10 }}
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            price={item.price}
            image_url={item.image_url}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default ItemsList;
