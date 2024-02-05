import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import {loginStyles} from './styles';

const Login = props => {
  return (
    <Background>
      <View style={loginStyles.container}>
        <Text style={loginStyles.logintitle}>Login</Text>
        <View style={loginStyles.formContainer}>
          <Text style={loginStyles.welcomeText}>Welcome Back</Text>
          <Text style={loginStyles.loginsubTitle}>Login to your account</Text>

          <Field
            style={loginStyles.emailContainer}
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field
            style={loginStyles.passContainer}
            placeholder="Password"
            secureTextEntry={true}
          />

          <View style={loginStyles.forgotPasswordContainer}>
            <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
          </View>
          <View style={loginStyles.loginloginbtn}>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Login"
              Press={() => alert('Logged In')}
            />
          </View>
          <View style={loginStyles.accountContainer}>
            <Text style={loginStyles.signUpText}>Don't have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={loginStyles.signUpLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
