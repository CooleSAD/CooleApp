import React, { Component } from "react";
import {
  View,
  Container,
  Thumbnail,
  Text,
  Button,
  ListItem,
  Radio,
  Left,
  Right,
  Icon,
  Toast
} from "native-base";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInput from "../components/login/TextInput";
import { requestEditProfile } from '../utils/requests/profile';
import { fetchProfileSuccess } from '../redux/actions/profile';

class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      city: "",
      has_car: false,
      gender: "M",
      showToast : false
    };
  }

  componentDidMount() {
    const {data} = this.props
    this.setState({
      nickname : data.nickname,
      city : data.city,
      has_car : data.has_car,
      gender : data.gender ? data.gender : "M"
    })
  }

  isBorderedButton = (gender) => {
    return this.state.gender !== gender;
  };

  changeGender = (gender) => {
    this.setState({ gender });
  };

  toggleHasCar = () => {
    this.setState({has_car : !this.state.has_car})
  }

  onChangeField = (value, field) => {
    this.setState({ [field]: value });
  };

  showErrorToast = () => {
    Toast.show({
      text: "برای تکمیل پروفایل باید تمامی فیلد ها را پر کنید!",
      duration: 3000,
      buttonText: "باشه",
      type: "danger",
      textStyle: { fontFamily: "IRANSans", textAlign: "center" },
      buttonStyle: { display: "none" },
    });
  };

  onPressButton = () => {
    const {nickname, city, gender, has_car} = this.state
    const {navigation, data, fetchProfileSuccess, token} = this.props
    if(!data.is_completed && (nickname === "" || city === "")) {
      this.showErrorToast()
    } else {
      let payload = {
        nickname,
        city,
        gender,
        has_car
      }
      requestEditProfile(token, payload)
      .then((res) => {
        fetchProfileSuccess(res.data)
        navigation.navigate('Profile')
      })
      .catch((err) => {
        console.warn(err)
      })
    }
    
  }

  render() {
    const { data } = this.props;
    return (
      <Container style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Thumbnail
            large
            source={require("../../assets/img/icons/user_icon.png")}
          />
          <Text
            style={{ fontSize: 14, marginTop: 8, fontFamily: "IRANSans_bold" }}
          >
            {data.user}
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <KeyboardAwareScrollView>
            <Container style={styles.inputsContainer}>
              <TextInput
                style={{ marginVertical: 10 }}
                label="نام مستعار"
                color="black"
                labelSize={16}
                labelFont="IRANSans_medium"
                onChangeText={this.onChangeField}
                value={this.state.nickname}
                type="nickname"
              />

              <TextInput
                style={{ marginVertical: 10 }}
                label="شهر"
                color="black"
                labelSize={16}
                labelFont="IRANSans_medium"
                onChangeText={this.onChangeField}
                value={this.state.city}
                type="city"
              />
              <ListItem
                style={{
                  width: "100%",
                  flexDirection: "row-reverse",
                  marginTop: 10,
                }}
              >
                <Right style={{ width: "90%" }}>
                  <Text style={{ fontFamily: "IRANSans_medium", fontSize: 14 }}>
                    دارای خودرو
                  </Text>
                </Right>
                <Left style={{ width: "10%" }}>
                  <Radio onPress={this.toggleHasCar} selected={this.state.has_car} />
                </Left>
              </ListItem>
              <ListItem
                style={{
                  width: "100%",
                  flexDirection: "row-reverse",
                  marginTop: 10,
                }}
              >
                <Right>
                  <Text style={{ fontFamily: "IRANSans_medium", fontSize: 14 }}>
                    جنسیت
                  </Text>
                </Right>
                <Left>
                  <Button
                    onPress={() => this.changeGender("M")}
                    success
                    iconLeft
                    bordered={this.isBorderedButton("M")}
                  >
                    <Icon style={{ fontSize: 20 }} name="md-male" />
                    <Text style={styles.buttonText}>آقا</Text>
                  </Button>
                  <Button
                    onPress={() => this.changeGender("F")}
                    style={{ marginLeft: 10 }}
                    success
                    iconLeft
                    bordered={this.isBorderedButton("F")}
                  >
                    <Icon style={{ fontSize: 20 }} name="md-female" />
                    <Text style={styles.buttonText}>خانم</Text>
                  </Button>
                </Left>
              </ListItem>
            </Container>
          </KeyboardAwareScrollView>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={styles.buttonContainer}>
            <Button onPress={this.onPressButton} style={styles.button} info>
              <Text style={styles.buttonText}>{"تایید و ارسال"}</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.profileReducer.data,
  token: state.loginReducer.token
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfileSuccess : (data) => dispatch(fetchProfileSuccess(data))
})

const styles = StyleSheet.create({
  inputsContainer: {
    width: "90%",
    alignSelf: "center",
  },
  button: {
    borderRadius: 20,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "IRANSans_bold",
  },
  buttonContainer: {
    width: "40%",
    alignSelf: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
