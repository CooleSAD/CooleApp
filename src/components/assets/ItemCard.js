import React, {useState} from "react";
import { Image, StyleSheet } from "react-native";
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Text,
  Content,
  Button,
} from "native-base";
import PersianJS from "persianjs";

import { requestReserveProperty } from '../../utils/requests/properties';

function ItemCard({ name, image_url, price, toggleModal, state, token, id }) {
  const [reserved, setReserved] = useState(state)


  function getButtonText(state) {
    if(state == 'F')
      return 'رزرو'
    return 'رزرو شده'
  }

  function onPressButton() {
    requestReserveProperty(token, id)
    .then((res) => {
      toggleModal()
      setReserved('R')
    })
    .catch((err) => console.warn(err))
  }

  return (
    <Content style={{ marginVertical: 1, alignSelf: "center" }}>
      <Card style={{ borderRadius: 25, backgroundColor: "#f6f6f6", width:'99%' }}>
        <CardItem bordered cardBody style={styles.ImageCardItem}>
          <Image
            resizeMode={"cover"}
            source={{uri : image_url}}
            style={styles.Image} //replace bg color with image
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text
              style={{
                fontFamily: "IRANSans_bold",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              {PersianJS(price).englishNumber().toString() + "  " + "تومان"}
            </Text>
          </Left>
          <Right>
            <Text style={{ fontFamily: "IRANSans_bold", fontSize: 16 }}>
              {name}
            </Text>
          </Right>
        </CardItem>
        <CardItem bordered style={styles.TextCardItem}>
          <Button
            style={{ width: "70%", justifyContent: "center", borderRadius: 20 }}
            info
            onPress={onPressButton}
            disabled={reserved == 'R'}
          >
            <Text style={{ fontFamily: "IRANSans_bold", fontSize: 14 }}>
              {getButtonText(reserved)}
            </Text>
          </Button>
        </CardItem>
      </Card>
    </Content>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  ImageCardItem: {
    backgroundColor: "transparent",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 200,
    
  },

  TextCardItem: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
  },

  Image: {
    height: "100%",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
