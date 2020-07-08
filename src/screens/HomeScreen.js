import React, { Component } from "react";
import { Container, Text, Spinner, View , Button} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import {connect} from 'react-redux'

import EventsList from "../components/home/EventsList";
import { eventsLoading, eventsLoaded, eventsError } from '../redux/actions/home';
import { fetchProfileSuccess } from '../redux/actions/profile';
import { requestEvents } from '../utils/requests/events';
import { requestFetchProfile } from '../utils/requests/profile';

class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.data = []
  }

  componentDidMount() {
    this.props.eventsLoading()
    requestEvents(this.props.token)
    .then((res) => {
      this.data = res.data
      this.props.eventsLoaded()
    })
    .catch((err) => {
      this.props.eventsError()
    })

    requestFetchProfile(this.props.token)
      .then((res2) => {
        this.props.fetchProfileSuccess(res2.data)
      })
      .catch((err) => {
        console.warn("error getting profile")
      })
  }

  render() {
    const { navigation, loading, loaded, error } = this.props;
    let content = <View></View>;
    if (loading) {
      content = <Spinner color='blue'/>
    } else if(loaded) {
      content = <EventsList data={this.data} navigation={navigation} />
    } else {
      content = <Text>error</Text>
    }
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/img/backgrounds/home.png")}
          style={styles.backgroundImageStyle}
        >
          {content}
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading : state.homeReducer.eventsLoading,
  error : state.homeReducer.eventsError,
  loaded : state.homeReducer.eventsLoaded,
  token : state.loginReducer.token
})

const mapDispatchToProps = dispatch => ({
  eventsLoading : () => dispatch(eventsLoading()),
  eventsError : () => dispatch(eventsError()),
  eventsLoaded : () => dispatch(eventsLoaded),
  fetchProfileSuccess : (data) => dispatch(fetchProfileSuccess(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  backgroundImageStyle: {
    backgroundColor: "transparent",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
