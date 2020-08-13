import React from 'react';
import { Content, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {StyleSheet} from 'react-native'


const EventCard = ({
    avatar,
    name,
    lastName,
    item,
    contact
  }) => {
    return (
      <Content style={{backgroundColor:'#00000009', flex:1}}>
          <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../../assets/img/icons/user_icon.png')} />
              </Left>
              <Body>
                <Text>{item + ' '}</Text>  
                <Text note>{name + ' ' + lastName}</Text>
              </Body>
              <Right>
                <Text note>{'Contact: ' + contact + ' '}</Text>
              </Right>
            </ListItem>
      </Content>
    );
  };

  export default EventCard;

  const styles = StyleSheet.create({
    containerStyle: { marginLeft: 5,
      marginRight: 5, 
      marginTop: 10, 
      borderRadius: 10,
      backgroundColor: '#fff' 
    },
  })