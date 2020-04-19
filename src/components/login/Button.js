import React, { Component } from "react";
import { Button, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default class CooleButton extends Component {
  render() {
    const { title, textSize, style, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontFamily: "IRANSans_bold",
            fontSize: textSize ? textSize : 16,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
