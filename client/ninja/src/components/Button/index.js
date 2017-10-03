import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import global from '../../constants/global';

class Button extends Component {
    render() {
        const { title, custormStyles, onPressHandler } = this.props;
        return (
            <TouchableOpacity
                style={[styles.container, custormStyles]}
                activeOpacity={0.8}
                onPress={onPressHandler}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default Button;


const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 4,
        backgroundColor: global.themeColor,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff"
    }
})