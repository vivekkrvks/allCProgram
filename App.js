import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import AfterHomeScreen from './src/screens/AfterHomeScreen/AfterHomeScreen';
import CodeScreen from './src/screens/CodeScreen/CodeScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AfterHome" component={AfterHomeScreen} />
        <Stack.Screen name="Code" component={CodeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;