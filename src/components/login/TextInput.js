import React, {Component} from 'react';
import { Label, Input, Item } from 'native-base';

export default class TextInput extends Component {

    render() {
        const {label, password, onChangeText, type, error, style} = this.props

        return(
            <Item style={style} floatingLabel>
                <Label style={{fontFamily : 'IRANSans', fontSize: 14, color : error ? 'red' : 'white'}}>{label}</Label>
                <Input onChangeText={(value) => onChangeText(value, type)} secureTextEntry={(password) ? true : false} style={{fontFamily : 'IRANSans', marginTop : 5}}/>
            </Item>
        )
    }
}