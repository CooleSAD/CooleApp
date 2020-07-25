import React, { Component } from "react";
import { View, Container } from "native-base";
import { connect } from "react-redux";

import { requestMyEvents } from "../utils/requests/events";
import MyEventsList from "../components/event/MyEventsList";

class MyEventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      requestMyEvents(this.props.token)
        .then((res) => {
          this.setState({ events: res.data });
        })
        .catch((err) => console.warn(err));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  cancelEvent = (id) => {
    let newEvents = this.state.events.filter((event) => event.id !== id)
    this.setState({events : newEvents})
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#edffef" }}>
        <MyEventsList token={this.props.token} cancelEvent={this.cancelEvent} events={this.state.events} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(MyEventsScreen);
