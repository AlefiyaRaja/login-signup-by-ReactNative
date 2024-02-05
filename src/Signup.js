// Signup.js

import React from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Field from './Field';
import {darkGreen} from './Constants';
import {loginStyles} from './styles';

const Signup = props => {
  return (
    <Background>
      <View style={loginStyles.signupcontainer}>
        <Text style={loginStyles.signuptitle}>Register</Text>
        <Text style={loginStyles.signupsubTitle}>Create a new account</Text>
        <View style={loginStyles.signupformContainer}>
          <Field placeholder="First Name" style={loginStyles.textInput} />
          <Field placeholder="Last Name" style={loginStyles.textInput} />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            style={loginStyles.textInput}
          />
          <Field
            placeholder="Contact Number"
            keyboardType={'number'}
            style={loginStyles.textInput}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            style={loginStyles.textInput}
          />
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={loginStyles.textInput}
          />
          <View style={loginStyles.agreementTextContainer}>
            <Text style={loginStyles.agreementText}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={loginStyles.agreementLink}>Terms & Conditions</Text>
          </View>
          <View style={loginStyles.agreementTextContainer}>
            <Text style={loginStyles.agreementText}>and </Text>
            <Text style={loginStyles.agreementLink}>Privacy Policy</Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View style={loginStyles.loginLinkContainer}>
            <Text style={loginStyles.loginText}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={loginStyles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
