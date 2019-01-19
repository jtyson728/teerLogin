import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Animatable from 'react-native-animatable';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableHighlight,
  
} from 'react-native';
 


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            whyJoin: ''
        }
    }
    firstAnswer = ()=>{
        this.setState({ whyJoin: 1 })
        
    }
    secondAnswer = ()=>{
        this.setState({ whyJoin: 2 })
        
    }
    thirdAnswer = () => {
        this.setState({ whyJoin: 3 })
        
    }
    fourthAnswer = (text) => {
        this.setState({ whyJoin: 4 })
        
    }
    fifthAnswer = (text) => {
        this.setState({ whyJoin: 5 })
        
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
                <View style = {styles.questionHeaderView}>
                    <Image source = {require('./images/Question1.jpg')} style = {styles.logoStyle}/>
                </View>
                <View style = {styles.formContainer}>
                        <TouchableHighlight style = {styles.primaryButton}>
                            <Text style={styles.submitText}
                            onPress = {() => this.firstAnswer()}>Looking for Support</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style = {styles.primaryButton}>
                            <Text style={styles.submitText} 
                            onPress = {() => this.secondAnswer()}>Lesson Planning</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style = {styles.primaryButton}>
                            <Text style={styles.submitText} 
                            onPress = {() => this.thirdAnswer()}>To Connect with Teachers</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style = {styles.primaryButton}>
                            <Text style={styles.submitText} 
                            onPress = {() => this.fourthAnswer()}>Grow as an Educator</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style = {styles.primaryButton}>
                            <Text style={styles.submitText} 
                            onPress = {() => this.fifthAnswer()}>Write in</Text>
                        </TouchableHighlight>
                    
               </View>
               <View style = {styles.answerContainer}>
                    <Text style={[styles.answerText]}>
                        { this.state.whyJoin !== 0 ? this.state.whyJoin: null}
                    </Text>
               
               </View>
                <View style = {styles.footer}>
                    <View style = {styles.dontHaveAccount}>
                        <Text style = {{fontSize: 15, color: "#fff"}}>Question 1 of 10 </Text>
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
       
    },
    answerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    answerText: {
        color: 'black'
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
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#5CB9A2',
        overflow: "hidden",
        fontSize: 15,
        
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
        width: 300,
        height: 200,
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
     questionHeaderView:{
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 70,
        paddingBottom: 40,
        
    }
})