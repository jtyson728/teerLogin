import React, { Component } from 'react';
 
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
 
class TextFieldBox extends Component {
    render(){
        return(
        <View>
            <TextInput style={styles.textInputstyle} placeholder = {this.props.inputType} placeholderTextColor = 'white' secureTextEntry = {this.props.isPassword} returnKeyType = "next"/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputstyle: {
        height: 50,
        width: 260, 
        fontSize: 20, 
        borderRadius: 30, 
        backgroundColor: '#048c84', 
        borderWidth: 1,
        borderColor: '#5CB9A2',
        paddingHorizontal: 20
        },
});
 
export default TextFieldBox;