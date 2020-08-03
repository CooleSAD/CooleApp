import React from "react";
import { Image, StyleSheet } from "react-native";
import { Card, CardItem, Left, Right, Body, Text, Content } from "native-base";
import FastImage from 'react-native-fast-image'



const ItemCard = ({ 
  title, 
  image_url
}) => {
    return (
      <Content style={{ marginVertical: 1, width: "95%", alignSelf: "center"}}>
        <Card style={{ borderRadius: 25 , backgroundColor: '#f6f6f6'}} >
          <CardItem bordered cardBody style={styles.ImageCardItem}>
            <Image
              resizeMode = {'cover'}
              source={require("../../../assets/img/samples/bag1.jpg")}
              style={styles.Image} //replace bg color with image
            />
  
            {/* <FastImage
              source = {{uri: image_url,}}
              style={{ height: 200, width: null, flex: 1 }}
            />  */}
          </CardItem> 
  
          <CardItem bordered style={styles.TextCardItem}>   

            <Right style = {{flex: 1, paddingRight: 5}}>
              <Text style={{fontFamily: "IRANSans_bold", fontSize : 16 }}>{title}</Text>
            </Right>
  
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