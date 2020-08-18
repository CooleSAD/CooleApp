import React from "react";
import {
  Content,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon
} from "native-base";
import PersianJS from "persianjs";

const CostItem = ({ description, amount, toggleModal, id, setChosenCostId}) => {
  return (
    <Content style={{ backgroundColor: "#00000009", flex: 1 }}>
      <ListItem
        noBorder
        avatar
        onPress={() => {
            setChosenCostId(id)
            toggleModal()
        }}
      >
        <Left>
          <Text style={{ fontFamily: "IRANSans_bold" }}>
            {"مبلغ:  " + PersianJS(amount).englishNumber().toString() + "  تومان" }
          </Text>
        </Left>
        <Body>
          <Text style={{ fontFamily: "IRANSans_bold" }}>{description}</Text>
        </Body>
        <Right style={{alignSelf:'center'}}>
          <Icon style={{color : '#277064'}} name="md-cash"/>
        </Right>
      </ListItem>
    </Content>
  );
};

export default CostItem;


