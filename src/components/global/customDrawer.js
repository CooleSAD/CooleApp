import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from "@react-navigation/drawer";
import {connect} from 'react-redux'
import { View, Thumbnail, Text } from "native-base";

import { requestLogout } from '../../utils/requests/logout';
import { successLogout } from '../../redux/actions/logout';


function logout(token, successLogout) {
    requestLogout(token)
    .then((res) => successLogout())
    .catch((err) => console.warn(err))
}

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView contentContainerStyle={{height:'100%', flex:1}} {...props}>
      <View style={{justifyContent:'center', alignItems:'center', marginVertical:20}}>
        <Thumbnail large source={require("../../../assets/img/icons/user_icon.png")}/>
        <Text style={{fontSize:12, marginTop:8}}>email@email.com</Text>
      </View>
      <DrawerItemList
        itemStyle={{ alignItems: 'flex-end' }}
        labelStyle={{ fontFamily: "IRANSans_bold" }}
        {...props}
      />
      <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end'}}>
      <DrawerItem
        labelStyle={{ fontFamily: "IRANSans_bold", color : 'red', paddingLeft:15}}
        style={{ alignItems: "center" }}
        label="خروج از حساب کاربری"
        onPress={() => logout(props.token, props.successLogout)}
      />
      </View>
    </DrawerContentScrollView>
  );
};

const mapStateToProps = state => ({
    token : state.loginReducer.token
})

const mapDispatchToProps = dispatch => ({
    successLogout : () => dispatch(successLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
