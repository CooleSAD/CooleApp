import React, { Component } from 'react';
import { Container, Header, Content, List} from 'native-base';

import NeedItem from '../components/needs/NeedItem'

export default class ListAvatarExample extends Component {
  constructor(props) {
      super(props);
      this.state ={
        DATA : [
            {
                name:"ABC1",
                lastName:"CBA",
                item:"KIF",
                contact:"000",
                avatar_url:require('../../assets/img/icons/user_icon.png')
            },
            {
                name:"ABC2",
                lastName:"CBA",
                item:"KIF",
                contact:"000",
                avatar_url:require('../../assets/img/icons/user_icon.png')
            },
            {
                name:"ABC3",
                lastName:"CBA",
                item:"KIF",
                contact:"000",
                avatar_url:require('../../assets/img/icons/user_icon.png')
            },
            {
                name:"ABC4",
                lastName:"CBA",
                item:"KIF",
                contact:"000",
                avatar_url:require('../../assets/img/icons/user_icon.png')
            }
        ]
      }
  }
  render() {
    return (
      <Container style={{backgroundColor:'#edffef99'}}>
        <Content>
        
          <List>
          {
            Object.keys(this.state.DATA).map((data) => {
                return (
                  <NeedItem name={data.name} lastName={data.lastName} item={data.item} avatar_url={data.avatar_url} contact={data.contact}/>
                );
              })
            }
          </List>
        </Content>
      </Container>
    );
  }
}