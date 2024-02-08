import {StyleSheet} from 'react-native';
import {darkGreen, green} from './Constants';
import Btn from './Btn';

export const loginStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 460,
  },
  logintitle: {
    color: '#f7fafa',
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingRight: 25,
    fontFamily: "times"
  },
  formContainer: {
    backgroundColor: '#f7fafa',
    height: 680,
    width: 460,
    borderTopLeftRadius: 130,

    borderBottomRightRadius: 300,
    paddingTop: 80,
    alignItems: 'center',
    paddingRight: 35,
  },
  welcomeText: {
    fontSize: 40,
    color: '#f7af6a',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  loginsubTitle: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 30,
  },
  forgotPassword: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 35,
  },
  loginloginbtn: {
    paddingTop: 30,
  },
  emailContainer: {
    paddingTop: 30,
  },
  passContainer: {},
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 40,
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
    color: '#f7fafa',
    fontSize: 30,
    fontStyle: 'italic',
    fontFamily: 'times',
  },
  homesubTitle: {
    color: '#f7fafa',
    fontSize: 44,
    marginBottom: 40,
    fontStyle: 'italic',
    fontFamily: 'times',
  },
  signupcontainer: {
    alignItems: 'center',
    width: 460,
  },
  signuptitle: {
    color: '#f7fafa',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'times',
    fontStyle: 'normal',
    paddingRight: 30
  },
  signupsubTitle: {
    color: '#f7fafa',
    fontSize: 19,
    fontWeight: '300',
    marginBottom: 20,
    fontFamily: 'times',
    paddingRight: 30
  },
  signupformContainer: {
    backgroundColor: '#f7fafa',
    height: 680,
    width: 460,
    borderTopLeftRadius: 150,
    borderBottomRightRadius: 280,
    paddingTop: 50,
    alignItems: 'center',
    paddingRight: 40,
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
  },
  
});
