import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class InputField extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {value, placeholder, placeholderTextColor, secureTextEntry, selectTextOnFocus, autoFocus, editable, multiline, onChangeText, custormStyles} = this.props;
        return (
            <View style={[styles.container, custormStyles && custormStyles.container]}>
                <TextInput
                    style={[styles.input, custormStyles && custormStyles.input]}
                    underlineColorAndroid="transparent"
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    selectTextOnFocus={selectTextOnFocus}
                    autoFocus={autoFocus}
                    editable={editable}
                    multiline={multiline}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
        );
    }
}

export default InputField;


const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "red",
        paddingHorizontal: 20
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 0
    }
})