import React, { Component } from "react";
import { Container, Tabs, Tab } from "native-base";
import { StyleSheet } from "react-native";

import FinancialTab from '../components/inevent/FinancialTab'


class InEventScreen extends Component {
    
  render() {
    const {id} = this.props.route.params  
    return (
      <Container>
        <Tabs initialPage={2} tabBarUnderlineStyle={{backgroundColor:'#277064'}}>
          <Tab
            activeTabStyle={styles.tabStyle}
            tabStyle={styles.tabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
            heading="شرکت کنندگان"
          ></Tab>
          <Tab
            activeTabStyle={styles.tabStyle}
            tabStyle={styles.tabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
            heading="گالری عکس"
          ></Tab>
          <Tab
            activeTabStyle={styles.tabStyle}
            tabStyle={styles.tabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
            heading="مالی"
          >
              <FinancialTab eventId={id}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabTextStyle: {
    fontFamily: "IRANSans_medium",
  },
  activeTabTextStyle: {
    fontFamily: "IRANSans_medium",
  },
  tabStyle: {
    backgroundColor: "white",
  },
});

export default InEventScreen;
