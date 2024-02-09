// // Signup.js

// import React from 'react';
// import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import Background from './Background';
// import Btn from './Btn';
// import Field from './Field';
// import {darkGreen} from './Constants';
// import {loginStyles} from './styles';

// const Signup = props => {
//   return (
//     <Background>
//       <View style={loginStyles.signupcontainer}>
//         <Text style={loginStyles.signuptitle}>Register</Text>
//         <Text style={loginStyles.signupsubTitle}>Create a new account</Text>
//         <View style={loginStyles.signupformContainer}>
//           <Field placeholder="First Name" style={loginStyles.textInput} />
//           <Field placeholder="Last Name" style={loginStyles.textInput} />
//           <Field
//             placeholder="Email / Username"
//             keyboardType={'email-address'}
//             style={loginStyles.textInput}
//           />
//           <Field
//             placeholder="Contact Number"
//             keyboardType={'number'}
//             style={loginStyles.textInput}
//           />
//           <Field
//             placeholder="Password"
//             secureTextEntry={true}
//             style={loginStyles.textInput}
//           />
//           <Field
//             placeholder="Confirm Password"
//             secureTextEntry={true}
//             style={loginStyles.textInput}
//           />
//           <View style={loginStyles.agreementTextContainer}>
//             <Text style={loginStyles.agreementText}>
//               By signing in, you agree to our{' '}
//             </Text>
//             <Text style={loginStyles.agreementLink}>Terms & Conditions</Text>
//           </View>
//           <View style={loginStyles.agreementTextContainer}>
//             <Text style={loginStyles.agreementText}>and </Text>
//             <Text style={loginStyles.agreementLink}>Privacy Policy</Text>
//           </View>
//           <Btn
//             textColor="white"
//             bgColor={darkGreen}
//             btnLabel="Signup"
//             Press={() => {
//               alert('Account created');
//               props.navigation.navigate('Login');
//             }}
//           />
//           <View style={loginStyles.loginLinkContainer}>
//             <Text style={loginStyles.loginText}>
//               Already have an account ?{' '}
//             </Text>
//             <TouchableOpacity
//               onPress={() => props.navigation.navigate('Login')}>
//               <Text style={loginStyles.loginLink}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Background>
//   );
// };

// export default Signup;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Field from './Field';
import {darkGreen} from './Constants';
import {loginStyles} from './styles';

const Signup = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    }
    if (!contactNumber.trim()) {
      errors.contactNumber = 'Contact Number is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSignup = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Proceed with registration
      alert('Account created');
      props.navigation.navigate('Login');
    }
  };

  return (
    <Background>
      <View style={loginStyles.signupcontainer}>
        <Text style={loginStyles.signuptitle}>Register</Text>
        <Text style={loginStyles.signupsubTitle}>Create a new account</Text>
        <View style={loginStyles.signupformContainer}>
          <Field
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={loginStyles.textInput}
          />
          {errors.firstName && (
            <Text style={loginStyles.errorText}>{errors.firstName}</Text>
          )}
          <Field
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={loginStyles.textInput}
          />
          {errors.lastName && (
            <Text style={loginStyles.errorText}>{errors.lastName}</Text>
          )}
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}
            onChangeText={setEmail}
            style={loginStyles.textInput}
          />
          {errors.email && (
            <Text style={loginStyles.errorText}>{errors.email}</Text>
          )}
          <Field
            placeholder="Contact Number"
            keyboardType={'number'}
            value={contactNumber}
            onChangeText={setContactNumber}
            style={loginStyles.textInput}
          />
          {errors.contactNumber && (
            <Text style={loginStyles.errorText}>{errors.contactNumber}</Text>
          )}
          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={loginStyles.textInput}
          />
          {errors.password && (
            <Text style={loginStyles.errorText}>{errors.password}</Text>
          )}
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={loginStyles.textInput}
          />
          {errors.confirmPassword && (
            <Text style={loginStyles.errorText}>{errors.confirmPassword}</Text>
          )}
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={handleSignup}
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
