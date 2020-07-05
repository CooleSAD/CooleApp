import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {connect} from 'react-redux'

import { requestLogout } from '../../utils/requests/logout';
import { successLogout } from '../../redux/actions/logout';

function logout(token, successLogout) {
    requestLogout(token)
    .then((res) => successLogout())
    .catch((err) => console.warn(err))
}

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList
        itemStyle={{ alignItems: "center" }}
        labelStyle={{ fontFamily: "IRANSans_bold" }}
        {...props}
      />
      <DrawerItem
        labelStyle={{ fontFamily: "IRANSans_bold", color : 'red' }}
        style={{ alignItems: "center" }}
        label="خروج از حساب کاربری"
        onPress={() => logout(props.token, props.successLogout)}
      />
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
