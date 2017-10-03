import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import global from '../constants/global';
import utils from '../utils/';
import InputField from '../components/InputField/';
import CountDown from '../components/CountDown/';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            password: ""
        }
    }

    render() {
        const { movie } = this.props;
        const { phoneNumber, password } = this.state;
        // placeholder, placeholderTextColor, secureTextEntry, selectTextOnFocus, autoFocus, editable, multiline, onChangeText
        return (
            <View style={styles.container}>
                <InputField
                    placeholder="请输入手机号"
                    onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                    value={phoneNumber}
                />
                <View style={styles.otpCodeContainer}>
                    <InputField
                        placeholder="请输入密码"
                        secureTextEntry={true}
                        custormStyles={{ container: { flex: 1 } }}
                        onChangeText={(password) => this.setState({ password })}
                        value={password}
                    />
                    <View style={styles.countDownContainer}>
                        <CountDown 
                            sendOtp={() => console.log("sender。。。")}
                        />
                    </View>
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

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40
    },
    otpCodeContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
    },
    countDownContainer: {
        flex: 1,
        height: 40,
        marginLeft: 10
    }
})
