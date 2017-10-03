import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import InputField from '../InputField/';
import Button from '../../components/Button/';
import global from '../../constants/global';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            password: ""
        };

        this.loginHandler = this.loginHandler.bind(this);
    }

    loginHandler() {
        console.log(this.state);
    }

    render() {
        const { phoneNumber, password } = this.state;
        return (
            <View>
                <InputField
                    placeholder="请输入手机号"
                    keyboardType="numeric"
                    onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                    value={phoneNumber}
                />
                <InputField
                    placeholder="请输入密码"
                    custormStyles={{ container: { marginTop: 10 } }}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                    value={password}
                />
                <Button
                    title="登录"
                    custormStyles={{marginTop:20}}
                    onPressHandler={this.loginHandler}
                />
            </View>
        );
    }
}

export default LoginForm;


const styles = StyleSheet.create({
    container: {

    },

    button: {
        marginTop: 10,
        height: 40
    }
})