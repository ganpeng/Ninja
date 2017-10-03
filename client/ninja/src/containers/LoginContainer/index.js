import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import LoginForm from '../../components/LoginForm/';
import global from '../../constants/global';

class LoginContainer extends Component {

    constructor(props) {
        super(props);

        this.gotoSignUp = this.gotoSignUp.bind(this);
    }

    gotoSignUp() {
        this.props.navigator.push({
            screen: 'ninja.SignUpContainer',
            title: '注册',
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <LoginForm />
                <TouchableOpacity onPress={this.gotoSignUp}>
                    <Text style={styles.signupLink}>
                        手机号快速注册
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginContainer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 40,
        paddingVertical: 30
    },
    signupLink: {
        marginTop: 20,
        textAlign: "right",
        color: global.themeColor,
        fontSize: 12,
    }
})