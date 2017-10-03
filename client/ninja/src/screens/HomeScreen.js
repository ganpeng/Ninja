import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Button } from 'react-native-elements';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'




class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.inputChange.bind(this);
    }

    inputChange(e) {
        console.log(e);
    }

    render() {
        const { movie } = this.props;
        return (
            <View>
                <Text>注册</Text>
                <View>
                    <FormLabel>手机号</FormLabel>
                    <FormInput onChangeText={this.inputChange}/>
                    <FormValidationMessage>手机号不存在</FormValidationMessage>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, {})(HomeScreen);

