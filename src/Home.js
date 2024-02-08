import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, white} from './Constants';
import {loginStyles} from './styles';

const Home = props => {
  return (
    <Background>
      <View style={loginStyles.homeContainer}>
        <Text style={loginStyles.hometitle}>Let's start</Text>
        <Text style={loginStyles.homesubTitle}>Exploring</Text>
        <Btn
          textColor="#f7fafa"
          bgColor={"#f7af6a"}
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          textColor="#f7af6a"
          bgColor={"#f7fafa"}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;
