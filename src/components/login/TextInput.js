import React, {Component} from 'react';
import { Label, Input, Item } from 'native-base';

export default class TextInput extends Component {

    render() {
        const {label, password} = this.props

        return(
            <Item floatingLabel>
                <Label style={{fontFamily : 'IRANSans', fontSize: 14}}>{label}</Label>
                <Input secureTextEntry={(password) ? true : false} style={{fontFamily : 'IRANSans', marginTop : 5}}/>
            </Item>
        )
    }
}