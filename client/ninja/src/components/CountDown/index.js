import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

import global from '../../constants/global';

class CountDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: "获取验证码",
            count: 10 
        };

        this.onPressHandler = this.onPressHandler.bind(this);
    }

    onPressHandler() {
        let {isLoading, count} = this.state;
        const {sendOtp} = this.props;
        if (isLoading) {
            return false;
        } else {
            this.setState({ 
                isLoading: true,
                text: `重新发送(${count}秒)`
            });
            sendOtp && sendOtp();
            this.timer = setInterval(() => {
                if (count <= 1) {
                    this.setState({
                        isLoading: false,
                        text:"获取验证码",
                        count: 10 
                    });
                    clearInterval(this.timer);
                    this.timer = null;
                } else {
                    count--;
                    this.setState({
                        text: `重新发送(${count}秒)`,
                        count
                    });
                }
            }, 1000)
        }
    }

    render() {
        const {text, isLoading} = this.state;
        return (
            <TouchableHighlight
                onPress={this.onPressHandler}
                style={[styles.container, isLoading && {backgroundColor: "#999"}]}
            >
                <Text style={styles.textStyle}>
                    {text}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default CountDown;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        backgroundColor: global.themeColor
    },
    textStyle: {
        color: "#fff"
    }
})