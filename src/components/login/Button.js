import React, { Component } from "react";
import { Button, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default class CooleButton extends Component {
  render() {
    const { title, textSize, style, onPress, disabled } = this.props;
    return (
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <Text
          style={{
            fontFamily: "IRANSans_bold",
            fontSize: textSize ? textSize : 16,
            color : disabled ? '#969595' : '#d9d9d9'
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}