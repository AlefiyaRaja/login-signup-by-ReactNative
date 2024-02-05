import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green, white } from './Constants';
import { loginStyles } from './styles';

const Home = (props) => {
  return (
    <Background>
      <View style={loginStyles.homeContainer}>
      <Text style={loginStyles.hometitle}>Let's start</Text>
      <Text style={loginStyles.homesubTitle}>Exploring</Text>
      <Btn
        textColor="white" 
        bgColor={darkGreen}
      btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn
        textColor="darkGreen"
        bgColor={white}
      btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
