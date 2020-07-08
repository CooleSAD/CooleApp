import React, { Component } from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

function IsFooter(check) {
  if (check == true) {
    return "row";
  }
  return "column";
}

export default class SquareThumbnail extends Component {
  render() {
    const { inputText, isFooter, name } = this.props;
    return (
      <View
        style={{
          flexDirection: IsFooter(isFooter),
          alignSelf: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Icon name={name} style={styles.Icon} size={25} />
        <Text style={styles.Text}>{inputText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    alignSelf: "center",
    color: "#6B8E23FF",
    fontFamily: "IRANSans_medium",
  },

  Icon: {
    alignSelf: "center",
    color: "#6B8E23FF",
  },
});
