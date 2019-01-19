import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SignUpButton from '../components/SignUpButton';


export default class Login extends Component {
    
    static navigationOptions = {
        header: null
    }
    
    
    render() {
        return (
           <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.mainContainer} scrollEnabled={false}>
                <View style = {styles.ImageContainer}>
                    <Image source = {require('./images/TeerHome-01.jpg')} style = {styles.logoStyle}/>
                </View>

                <View style = {styles.formContainer}>
                    <View style = {[styles.innerFormContainer, {alignItems: "center"}]}>
                        <Text style={styles.resetPassText}>Reset Password</Text>
                    </View>
                    <View style = {styles.innerFormContainer}>
                        <TextInput style={styles.inputStyle} placeholder = 'Email' placeholderTextColor='white'/>
                    </View>
                    <View style = {styles.innerFormContainer}>
                        <TouchableHighlight style = {{width: 260}}>
                            <Text style={styles.submitText}>Send</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style = {styles.footerContainer}>
                    <View style = {styles.dontHaveAccount}>
                        <Text style = {{fontSize: 15, color: "#fff"}}> Don't have an account? </Text>
                        <SignUpButton 
                                onPress={() => this.props.navigation.navigate('SignUpScreen')}
                                label="Sign Up"
                                styles={{label: styles.buttonYellowText}} 
                            />
                    </View>
                </View>
           </KeyboardAwareScrollView>
        );
    }
    
}
const styles = StyleSheet.create ({
    mainContainer: {
        backgroundColor: '#048c84',
        flex: 1,
        flexDirection: 'column'
    },
    ImageContainer: {
        
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logoStyle: {
        width: 220,
        height: 120,
        alignItems: "center",
        justifyContent: "center"
    },
    formContainer: {
        
        flex: 5,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        
        
    },
    innerFormContainer: {
        padding: 13
    },
    inputStyle: {
        height: 50,
        width: 260,
        fontSize: 20, 
        borderRadius: 30, 
        backgroundColor: '#048c84', 
        borderWidth: 1,
        borderColor: '#5CB9A2',
        paddingHorizontal: 10
        
    },
    resetPassText: {
        color: 'white',
        alignItems: 'center',
        fontSize: 20
    },
    submitText:{
        paddingTop:20,
        paddingBottom:20,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#5CB9A2',
        borderRadius: 34,
        borderWidth: 1,
        borderColor: '#5CB9A2',
        overflow: "hidden",
        fontSize: 20
        
    },
    footerContainer: {
        flex:1
    },
    buttonYellowText: {
        fontSize: 15,
        color: '#F7D35A'
    },
    dontHaveAccount:{
        flexDirection: "row",
        alignSelf: "center"
    }
})