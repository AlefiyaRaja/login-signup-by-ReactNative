// import React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import Background from './Background';
// import Btn from './Btn';
// import {darkGreen} from './Constants';
// import Field from './Field';

// import {loginStyles} from './styles';

// const Login = props => {
//   return (
//     <Background>
//       <View style={loginStyles.container}>
//         <Text style={loginStyles.logintitle}>Login</Text>
//         <View style={loginStyles.formContainer}>
//           <Text style={loginStyles.welcomeText}>Welcome Back</Text>
//           <Text style={loginStyles.loginsubTitle}>Login to your account</Text>

//           <Field
//             style={loginStyles.emailContainer}
//             placeholder="Email / Username"
//             keyboardType={'email-address'}
//           />
//           <Field
//             style={loginStyles.passContainer}
//             placeholder="Password"
//             secureTextEntry={true}
//             keyboardType={'number'}

//           />

//           <View style={loginStyles.forgotPasswordContainer}>
//             <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
//           </View>
//           <View style={loginStyles.loginloginbtn}>
//             <Btn
//               textColor="white"
//               bgColor={darkGreen}
//               btnLabel="Login"
//               Press={() => alert('Logged In')}
//             />
//           </View>
//           <View style={loginStyles.accountContainer}>
//             <Text style={loginStyles.signUpText}>Don't have an account ? </Text>
//             <TouchableOpacity
//               onPress={() => props.navigation.navigate('Signup')}>
//               <Text style={loginStyles.signUpLink}>Signup</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Background>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Background from './Background';
// import Btn from './Btn';
// import { darkGreen } from './Constants';
// import Field from './Field'; // Assuming this imports your custom Field component
// import { loginStyles } from './styles';

// const Login = props => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return 'Please enter a valid email address';
//     }
//     return '';
//   };

//   const handleLogin = () => {
//     if (validateEmail(email)) {
//       setEmailError(validateEmail(email));
//       return;
//     }

//     // Perform login logic here
//     Alert('Logged In');
//   };

//   return (
//     <Background>
//       <View style={loginStyles.container}>
//         <Text style={loginStyles.logintitle}>Login</Text>
//         <View style={loginStyles.formContainer}>
//           <Text style={loginStyles.welcomeText}>Welcome Back</Text>
//           <Text style={loginStyles.loginsubTitle}>Login to your account</Text>

//           <Field
//             style={loginStyles.emailContainer} // Apply error style if appropriate
//             placeholder="Email / Username"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={setEmail}
//             autoCapitalize="none"
//             autoCorrect={false}
//             error={!!emailError}
//             errorMessage={emailError}
//           />
//           <Field
//             style={loginStyles.passContainer} // Apply error style if appropriate
//             placeholder="Password"
//             secureTextEntry={true}
//             keyboardType="number" // Remove if not needed
//             value={password}
//             onChangeText={setPassword}
//           />

//           <View style={loginStyles.forgotPasswordContainer}>
//             <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
//           </View>
//           <View style={loginStyles.loginloginbtn}>
//             <Btn
//               textColor="white"
//               bgColor={darkGreen}
//               btnLabel="Login"
//               Press={handleLogin}
//             />
//           </View>
//           <View style={loginStyles.accountContainer}>
//             <Text style={loginStyles.signUpText}>Don't have an account ? </Text>
//             <TouchableOpacity
//               onPress={() => props.navigation.navigate('Signup')}>
//               <Text style={loginStyles.signUpLink}>Signup</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Background>
//   );
// };

// export default Login;


// 

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
// import Background from './Background';
// import Btn from './Btn';
// import { darkGreen } from './Constants';
// import { loginStyles } from './styles';

// const Login = props => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return 'Please enter a valid email address.';
//     }
//     return '';
//   };

//   const handleLogin = () => {
//     const validationError = validateEmail(email);
//     if (validationError) {
//       setEmailError(validationError);
//       Alert.alert('Error', validationError);
//       return;
//     }
//     // Proceed with login
//     Alert.alert('Logged In');
//   };

//   return (
//     <Background>
//       <View style={loginStyles.container}>
//         <Text style={loginStyles.logintitle}>Login</Text>
//         <View style={loginStyles.formContainer}>
//           <Text style={loginStyles.welcomeText}>Welcome Back</Text>
//           <Text style={loginStyles.loginsubTitle}>Login to your account</Text>

//           <TextInput
//             style={[
//               loginStyles.emailContainer,
//               emailError && loginStyles.errorInput,
//             ]}
//             placeholder="Email / Username"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={text => {
//               setEmail(text);
//               setEmailError('');
//             }}
//           />
//           {emailError ? (
//             <Text style={loginStyles.errorText}>{emailError}</Text>
//           ) : null}

//           <TextInput
//             style={loginStyles.passContainer}
//             placeholder="Password"
//             secureTextEntry={true}
//             value={password}
//             onChangeText={setPassword}
//           />

//           <View style={loginStyles.forgotPasswordContainer}>
//             <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
//           </View>
//           <View style={loginStyles.loginloginbtn}>
//             <Btn
//               textColor="white"
//               bgColor={darkGreen}
//               btnLabel="Login"
//               onPress={handleLogin}
//             />
//           </View>
//           <View style={loginStyles.accountContainer}>
//             <Text style={loginStyles.signUpText}>Don't have an account ? </Text>
//             <TouchableOpacity
//               onPress={() => props.navigation.navigate('Signup')}>
//               <Text style={loginStyles.signUpLink}>Signup</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Background>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import { loginStyles } from './styles';
import { validateEmail } from './utils'; 
const Login = props => {
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
const isvalid=()=>{
  return emailRegex.test(email);
}
  const handleLogin = () => {
    if(!isvalid){
      console.warn('Email is empty')
    }
    const validationError = validateEmail(email); 
    if (validationError) {
      setEmailError(validationError); 
      console.warn('Invalid Email')
    } else {
    setEmailError(''); 
    // NavigationContainer.navigate("RollDice");
    props.navigation.navigate('RollDice')
    }
  };

  return (
    <Background>
      <View style={loginStyles.container}>
        <Text style={loginStyles.logintitle}>Login</Text>
        <View style={loginStyles.formContainer}>
          <Text style={loginStyles.welcomeText}>Welcome Back</Text>
          <Text style={loginStyles.loginsubTitle}>Login to your account</Text>

          <Field
            style={[
              loginStyles.emailContainer,
              emailError && loginStyles.errorField,
            ]}
            placeholder="Email / Username"
            keyboardType="email-address"
            value={email}
            onChangeText={(text)=>setEmail(text)}
            autoCapitalize="none"
            autoCorrect={false}
            error={!!emailError}
            errorMessage={emailError}
          />
          <Field
           style={loginStyles.passContainer}           
           placeholder="Password"             
           secureTextEntry={true}            
           keyboardType={'number'}
           />


          <View style={loginStyles.loginloginbtn}>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Login"
              
              Press={handleLogin} 
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
