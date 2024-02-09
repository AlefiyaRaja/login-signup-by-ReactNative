import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import RollDice from './src/RollDice';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  // React.useEffect(() => {
    // },[isLoading])

  if (isLoading) {
    return   <View style={{flex: 1, paddingTop: 500}}><LottieView
    source={require('./src/assets/animation.json')}
    autoPlay 
    loop={false}
    resizeMode="cover"
    onAnimationFinish={() => setIsLoading(false)}

    />
    </View>
  } else {
   return  <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Signup" component={Signup} />
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="RollDice" component={RollDice} />
   </Stack.Navigator>
 </NavigationContainer>;
  }
}

export default App;
function UseState<T>(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
