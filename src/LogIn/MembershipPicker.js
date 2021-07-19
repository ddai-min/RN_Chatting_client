import React, { Component } from 'react';
import { Item, Picker, Icon } from 'native-base';

export default class MembershipPicker extends Component{
    constructor(props){
        super(props);
        this.state={
            selected2:undefined
        };
    }

    onValueChange2(value){
        this.setState({
            selected2:value
        });
    }

    render(){
        return(
            <Item picker>
                <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down"></Icon>}
                style={{width:undefined}}
                placeholder="선택"
                placeholderStyle={{color:"black"}}
                placeholderIconColor="black"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}>
                    <Picker.Item label="남" value="key0"></Picker.Item>
                    <Picker.Item label="여" value="key1"></Picker.Item>
                </Picker>
            </Item>
        );
    }
}