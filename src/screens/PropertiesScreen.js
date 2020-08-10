import React, { Component } from "react";
import { Container, Text, Picker, Icon, View } from "native-base";
import ItemsList from "../components/assets/ItemsList";
import { ImageBackground, StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default class PropertiesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory : "همه"
    }
    this.DATA = [
      {
        id: "1",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/bag1.jpg",
        price: "18000",
      },
      {
        id: "2",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/bag2.jpg",
        price: "10000",
      },
      {
        id: "3",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/bag.jpg",
        price: "25000",
      },
      {
        id: "4",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/stick.jpg",
        price: "30000",
      },
    ];
    this.DATA_DICT = {"همه": this.DATA}

  }
  
  onValueChange(value) {
    this.setState({
      selectedCategory: value
    });
  }

  onMountData(){
    for(var d in this.DATA){
      if (d.type in this.DATA_DICT){
        this.DATA_DICT[d.type].push(d)
      }else{
        this.DATA_DICT[d.type] = [d]
      }
    }
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/img/backgrounds/home.png")}
          style={styles.backgroundImageStyle}
        >
          <View style={styles.picker}>
            
            <Picker
                mode="dropdown"
                placeholder="Select your SIM"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your SIM"
                textStyle={{ color: "#5cb85c" }}
                itemStyle={{
                  backgroundColor: "#d3d3d3",
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                itemTextStyle={{ color: '#788ad2' }}
                style={{ width: undefined }}
                selectedValue={this.state.selectedCategory}
                onValueChange={this.onValueChange.bind(this)}
              >
                {
                  Object.keys(this.DATA_DICT).map((key) => {return(<Picker.Item label={key} value={key}/>);})
                }
              </Picker>
              
          </View>

          <View  style={styles.itemslist}>
            <ItemsList data={this.DATA_DICT[this.state.selectedCategory]}/>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageStyle: {
    backgroundColor: "transparent",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  picker: {
    width: undefined,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: '#00000022',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 5
  },

  itemslist: {
    flex: 15,
  }
});
