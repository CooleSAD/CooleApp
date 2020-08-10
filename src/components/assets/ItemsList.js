import React from "react";
import { FlatList } from "react-native";
import { Container, Text } from "native-base";

import ItemCard from "./ItemCard";

const ItemsList = (props) => {
  return (
    <Container style={{ backgroundColor: "transparent" }}>
      <FlatList
        style={{ marginBottom: 10 }}
        data={props.data}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            price={item.price}
            image_url={item.image_url}
            toggleModal={props.toggleModal}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default ItemsList;
