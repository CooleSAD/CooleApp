import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Button,
  View,
  Text,
  List,
  Separator,
} from "native-base";
import { connect } from "react-redux";
import PersianJS from "persianjs";
import Modal from "react-native-modal";

import TextInput from "../login/TextInput";
import { StyleSheet } from "react-native";
import {
  requestMyEventCosts,
  requestPostEventCost,
  requestDeleteCost,
  requestFetchDebt,
} from "../../utils/requests/inevents";
import CostItem from "./CostItem";

class FinancialTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: "",
      myCosts: [],
      isModalVisibile: false,
      chosenCostId: null,
      debt: 0,
    };
  }

  fetchDebt = () => {
    requestFetchDebt(this.props.token, this.props.eventId)
    .then((res) => this.setState({debt: res.data.debt}))
    .catch((err) => console.warn(err))
  }

  componentDidMount() {
    requestMyEventCosts(this.props.token, this.props.eventId)
      .then((res) => this.setState({ myCosts: res.data }))
      .catch((err) => console.warn(err));

    this.fetchDebt()
  }

  onChangeField = (value, field) => {
    this.setState({ [field]: value });
  };

  onConfirmPress = () => {
    const { description, amount } = this.state;
    requestPostEventCost(this.props.token, this.props.eventId, {
      description,
      amount,
    })
      .then((res) => {
        let newMyCosts = [...this.state.myCosts];
        newMyCosts.unshift(res.data);
        this.setState({ description: "", amount: "", myCosts: newMyCosts });
        this.fetchDebt()
      })
      .catch((err) => console.warn(err));
  };

  onDeleteCost = () => {
    requestDeleteCost(this.props.token, this.state.chosenCostId)
      .then((res) => {
        let newMyCosts = this.state.myCosts.filter(
          (c) => c.id !== this.state.chosenCostId
        );
        this.setState({ myCosts: newMyCosts, isModalVisibile: false });
        this.fetchDebt()
      })
      .catch((err) => console.warn(err));
  };

  renderModal = () => {
    return (
      <View style={styles.modal}>
        <Text style={styles.modalText}>آیا مایل به حذف این هزینه هستید؟</Text>
        <View style={styles.modalButtonsContainer}>
          <Button
            success
            style={styles.modalButton}
            onPress={this.onDeleteCost}
          >
            <Text style={styles.modalButtonText}>بله</Text>
          </Button>
          <Button danger style={styles.modalButton} onPress={this.toggleModal}>
            <Text style={styles.modalButtonText}>خیر</Text>
          </Button>
        </View>
      </View>
    );
  };

  toggleModal = () => {
    this.setState({ isModalVisibile: !this.state.isModalVisibile });
  };

  setChosenCostId = (id) => {
    this.setState({ chosenCostId: id });
  };

  render() {
    const { description, amount, isModalVisibile, debt } = this.state;
    const numDebt = (debt >= 0 ? debt : -debt)
    const debtText = numDebt === 0 ? 'صفر' : PersianJS(numDebt).englishNumber().toString()
    return (
      <Container style={{ backgroundColor: "#edffef99" }}>
        <Modal isVisible={isModalVisibile} onBackdropPress={this.toggleModal}>
          {this.renderModal()}
        </Modal>
        <Content>
          <View style={{ width: "90%", alignSelf: "center", paddingTop: 20, flexDirection:'row-reverse', justifyContent:'space-around' }}>
            <Text style={{ fontFamily: "IRANSans_bold", fontSize: 18 }}>
              {debt < 0 ? "طلب شما :" : "بدهی شما :"}
            </Text>
            <Text style={{ fontFamily: "IRANSans_bold", fontSize: 18 }}>
              {debtText + " تومان"}
            </Text>
          </View>
          <Form style={{ width: "90%", alignSelf: "center", marginBottom: 20 }}>
            <TextInput
              onChangeText={this.onChangeField}
              type="description"
              label="شرح هزینه"
              color="black"
              value={description}
            />
            <TextInput
              onChangeText={this.onChangeField}
              type="amount"
              label="مقدار هزینه به تومان"
              color="black"
              value={amount ? PersianJS(amount).englishNumber().toString() : ""}
              keyboardType="numeric"
            />
            <View style={{ marginTop: 10, alignSelf: "flex-start" }}>
              <Button
                onPress={this.onConfirmPress}
                disabled={description === "" || amount === ""}
                style={{ borderRadius: 20 }}
                info
              >
                <Text style={{ fontFamily: "IRANSans_bold" }}>ثبت هزینه</Text>
              </Button>
            </View>
          </Form>
          <List>
            <Separator bordered>
              <Text style={styles.separatorText}>هزینه های من</Text>
            </Separator>
            {this.state.myCosts.map((c) => {
              return (
                <CostItem
                  description={c.description}
                  amount={c.amount}
                  id={c.id}
                  setChosenCostId={this.setChosenCostId}
                  toggleModal={this.toggleModal}
                />
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  separatorText: {
    fontFamily: "IRANSans_medium",
    fontSize: 14,
    marginRight: 10,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  modalText: {
    fontFamily: "IRANSans",
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
  },

  modalButton: {
    width: "40%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  modalButtonText: {
    fontSize: 16,
    fontFamily: "IRANSans_bold",
  },
  modalButtonsContainer: {
    flexDirection: "row-reverse",
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(FinancialTab);
