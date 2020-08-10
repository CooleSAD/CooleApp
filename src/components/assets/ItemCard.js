import React from "react";
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

const ItemCard = ({ title, image_url, price, toggleModal }) => {
  return (
    <Content style={{ marginVertical: 1, alignSelf: "center" }}>
      <Card style={{ borderRadius: 25, backgroundColor: "#f6f6f6" }}>
        <CardItem bordered cardBody style={styles.ImageCardItem}>
          <Image
            resizeMode={"cover"}
            source={require("../../../assets/img/samples/bag2.jpg")}
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
              {title}
            </Text>
          </Right>
        </CardItem>
        <CardItem bordered style={styles.TextCardItem}>
          <Button
            style={{ width: "50%", justifyContent: "center", borderRadius: 20 }}
            info
            onPress={toggleModal}
          >
            <Text style={{ fontFamily: "IRANSans_bold", fontSize: 14 }}>
              رزرو
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
    width: null,
  },

  TextCardItem: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
  },

  Image: {
    height: "100%",
    width: undefined,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
