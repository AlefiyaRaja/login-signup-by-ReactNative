import { StyleSheet } from 'react-native';
import { darkGreen, green } from './Constants';
import Btn from './Btn';

export const loginStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 460,
  },
  logintitle: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    height: 700,
    width: 460,
    borderTopLeftRadius: 130,
    borderBottomRightRadius: 300,
    paddingTop: 100,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 40,
    color: darkGreen,
    fontWeight: 'bold',
  },
  loginsubTitle: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotPassword: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeContainer: {
    marginHorizontal: 40,
    marginVertical: 100,
    
  },
  hometitle: {
    color: 'white',
    fontSize: 64,
  },
  homesubTitle: {
    color: 'white',
    fontSize: 64,
    marginBottom: 40,
  },
  signupcontainer: {
    alignItems: 'center',
    width: 460,
  },
  signuptitle: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginTop: 20,
  },
  signupsubTitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signupformContainer: {
    backgroundColor: 'white',
    height: 700,
    width: 460,
    borderTopLeftRadius: 150,
    borderBottomRightRadius: 300,
    paddingTop: 50,
    alignItems: 'center',
  },
  textInput: {
    width: '78%',
    marginBottom: 10,
    borderBottomColor: 'grey',  
    borderBottomWidth: 1,
    fontSize: 16,
  },
  agreementTextContainer: {
    flexDirection: 'row',
    width: '78%',
    paddingRight: 16,
    marginBottom: 10,
    justifyContent: 'center',
  },
  agreementText: {
    color: 'grey',
    fontSize: 16,
  },
  agreementLink: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  }


});