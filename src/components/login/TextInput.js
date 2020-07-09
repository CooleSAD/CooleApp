import React, { Component } from "react";
import { Label, Input, Item } from "native-base";

export default class TextInput extends Component {
  render() {
    const {
      label,
      password,
      onChangeText,
      type,
      error,
      style,
      color,
      labelSize,
      labelFont,
      value
    } = this.props;

    return (
      <Item style={style} floatingLabel>
        <Label
          style={{
            fontFamily: labelFont ? labelFont : "IRANSans",
            fontSize: labelSize ? labelSize : 14,
            color: error ? "red" : color,
          }}
        >
          {label}
        </Label>
        <Input
          value={value}
          onChangeText={(value) => onChangeText(value, type)}
          secureTextEntry={password ? true : false}
          style={{ fontFamily: "IRANSans", marginTop: 5 }}
        />
      </Item>
    );
  }
}
