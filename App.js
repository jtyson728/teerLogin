/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import{AppRegistry} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import ForgotPassword from './src/pages/ForgotPassword';
import QuestionOne from './src/pages/QuestionOne';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

const AppNavigator = createStackNavigator(
  {
    LoginScreen: Login,
    SignUpScreen: SignUp,
    ForgotPassScreen: ForgotPassword,
    QuestionOneScreen: QuestionOne,
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default createAppContainer(AppNavigator);
