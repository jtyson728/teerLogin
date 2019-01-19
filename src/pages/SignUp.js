import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableHighlight,
  
} from 'react-native';
 
import * as Animatable from 'react-native-animatable';
import SignUpButton from '../components/SignUpButton';
import TextFieldBox from '../components/TextFieldBox';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: "",
            username:"",
            password:"",
            confirmPassword: ""
        }
    }
    signUpEmail = (text)=>{
        this.setState({ userEmail: text })
    }
    signUpUser = (text)=>{
        this.setState({ username: text })
    }
    signUpPass = (text) => {
        this.setState({ password: text })
    }
    signUpConfirm = (text) => {
        this.setState({ confirmPassword: text })
    }
    submitSignUpCred= (userEmail, username, password, confirmPassword) =>{
        if(confirmPassword != password){
            Alert.alert('Password fields do not match')
            this.refs.view.tada(800)
        }
        else{
            Alert.alert('Email:' + userEmail + "\n" + 'username:' + username + "\n" + ' password: ' + password + "\n" + ' confirm: ' + confirmPassword);
            this.props.navigation.navigate('QuestionOneScreen');
        }
    }
    signUpPressed(){
        this.props.navigation.navigate("SignUp");
    }
    static navigationOptions = {
        header: null
    }
    
    
    render() {
        return (
           <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.mainContainer} scrollEnabled={false}>
                <View style = {styles.imageView}>
                    <Image source = {require('./images/TeerHome-01.jpg')} style = {styles.logoStyle}/>
                </View>
                <View style = {styles.formContainer}>
                        <TextInput
                            placeholder = 'Email' 
                            style = {styles.textInputstyle} 
                            autoCapitalize = "none" 
                            placeholderTextColor = 'white' 
                            onChangeText = {this.signUpEmail} 
                            returnKeyType = "next"
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            blurOnSubmit={false}
                        />
                        <TextInput 
                            ref={(input) => { this.secondTextInput = input; }}
                            placeholder = 'Username' 
                            style = {styles.textInputstyle} 
                            autoCapitalize = "none" 
                            placeholderTextColor = 'white' 
                            onChangeText = {this.signUpUser} 
                            returnKeyType = "next"
                            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            blurOnSubmit={false}
                        />
                        <TextInput 
                            ref={(input) => { this.thirdTextInput = input; }}
                            placeholder = 'Password' 
                            style = {styles.textInputstyle} 
                            autoCapitalize = "none" 
                            placeholderTextColor = 'white' 
                            secureTextEntry = 'true' 
                            onChangeText = {this.signUpPass} 
                            returnKeyType = "next"
                            onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                            blurOnSubmit={false}
                        />
                        <TextInput 
                            ref={(input) => { this.fourthTextInput = input; }}
                            placeholder = 'Confirm Password' 
                            style = {styles.textInputstyle} 
                            autoCapitalize = "none" 
                            placeholderTextColor = 'white' 
                            secureTextEntry = 'true' 
                            onChangeText = {this.signUpConfirm}
                        />
                    
                   
                    <TouchableHighlight style = {styles.primaryButton}>
                        <Animatable.View ref="view">
                            <Text style={styles.submitText} onPress = {() => this.submitSignUpCred(this.state.userEmail, this.state.username, this.state.password, this.state.confirmPassword) }>Sign Up</Text>
                        </Animatable.View>
                    </TouchableHighlight>
                    
               </View>
                <View style = {styles.footer}>
                    <View style = {styles.dontHaveAccount}>
                        <Text style = {{fontSize: 15, color: "#fff"}}>Have an account? </Text>
                        <SignUpButton 
                            onPress={() => this.props.navigation.navigate('LoginScreen')}
                            label="Sign in"
                            styles={{label: styles.buttonYellowText}} 
                        />
                    </View>
                </View>
           </KeyboardAwareScrollView>
        );
    }
    
}
const styles = StyleSheet.create({
    
    primaryButton: {
        backgroundColor: '#048c84',
        width: 260,
        fontSize: 20,
        color: '#FFF',
        paddingTop: 20
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#048c84',
        flexDirection: 'column'
    },
    submitText:{
        padding:19,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#5CB9A2',
        borderRadius: 34,
        borderWidth: 1,
        borderColor: '#5CB9A2',
        overflow: "hidden",
        fontSize: 20
        
    },
    textInputstyle: {
        height: 50,
        width: 260, 
        fontSize: 20, 
        borderRadius: 30,
        color: 'white', 
        backgroundColor: '#048c84', 
        borderWidth: 1,
        borderColor: '#5CB9A2',
        paddingHorizontal: 20
    },
    inputView: {
        paddingBottom: 20,
        width: 260
    },
    formContainer: {
        flex: 8,
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    logoStyle:{
        width: 220,
        height: 120,
        alignSelf: "center",
        
        
    },
    buttonYellowText: {
        fontSize: 15,
        color: '#F7D35A'
    },
    dontHaveAccount:{
        flexDirection: "row",
        justifyContent: "center",
        
    },
    footer: {
        marginTop: 75,
        flex: 1
     },
     imageView:{
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 110,
        paddingBottom: 50,
        
    }
})
 