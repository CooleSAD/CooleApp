import React, { Component } from "react";
import { View, Container } from "native-base";
import { connect } from "react-redux";

import { requestMyProperties } from "../utils/requests/properties";
import MyPropertiesList from "../components/assets/MyPropertiesList";

class MyEventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      requestMyProperties(this.props.token)
        .then((res) => {
          this.setState({ properties: res.data });
        })
        .catch((err) => console.warn(err));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#edffef" }}>
        <MyPropertiesList properties={this.state.properties} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(MyEventsScreen);
