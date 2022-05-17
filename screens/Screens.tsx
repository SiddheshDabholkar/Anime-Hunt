import {RootStack} from '../App.types';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Drawer from './Drawer/Drawer';
import Onboard from './OnBoard/Onboard';
import useIsNew from '../hooks/useIsNew';

const Stack = createNativeStackNavigator<RootStack>();

const Screens: React.FC = () => {
  const {isNewUser} = useIsNew();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isNewUser ? (
          <Stack.Screen
            name="Onboard"
            component={Onboard}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
