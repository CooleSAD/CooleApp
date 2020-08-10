import React from "react";
import { FlatList } from "react-native";
import { Container, Text } from "native-base";

import ItemCard from "./ItemCard";
import { BASE_ADDRESS } from '../../utils/api';

const ItemsList = (props) => {
  return (
    <Container style={{ backgroundColor: "transparent" }}>
      <FlatList
      columnWrapperStyle={{justifyContent:'space-between'}}
        style={{ marginBottom: 10 }}
        data={props.data}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemCard
            id={item.id}
            name={item.name}
            price={item.price}
            image_url={BASE_ADDRESS + item.image}
            toggleModal={props.toggleModal}
            state={item.state}
            token={props.token}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default ItemsList;
