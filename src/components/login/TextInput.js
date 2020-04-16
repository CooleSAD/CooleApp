import React, {Component} from 'react';
import { Label, Input } from 'native-base';

export default class TextInput extends Component {

    render() {
        const {label} = this.props

        return(
            <>
                <Label>{label}</Label>
                <Input/>
            </>
        )
    }
}