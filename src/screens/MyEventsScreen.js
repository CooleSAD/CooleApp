import React, { Component } from "react";
import { View, Container } from "native-base";
import { connect } from 'react-redux';

import { requestMyEvents } from '../utils/requests/events';
import MyEventsList from "../components/event/MyEventsList";

class MyEventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events : []
    }
  }

  componentDidMount() {
    requestMyEvents(this.props.token)
    .then((res) => {
      this.setState({events : res.data})
    })
    .catch((err) => console.warn(err))
  }

  render() {
    return (
        <Container style={{ backgroundColor:'#edffef'}}>
            <MyEventsList events={this.state.events}/>
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  token : state.loginReducer.token
})

export default connect(mapStateToProps, null)(MyEventsScreen);
