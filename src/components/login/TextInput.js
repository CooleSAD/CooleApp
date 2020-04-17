import React, {Component} from 'react';
import { Label, Input, Item } from 'native-base';

export default class TextInput extends Component {

    render() {
        const {label} = this.props

        return(
            <Item floatingLabel>
                <Label style={{fontFamily : 'IRANSans', fontSize: 14}}>{label}</Label>
                <Input style={{fontFamily : 'IRANSans', marginTop : 5}}/>
            </Item>
        )
    }
}