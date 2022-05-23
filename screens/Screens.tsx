import {RootStack} from '../App.types';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Drawer from './Drawer/Drawer';
import Onboard from './OnBoard/Onboard';
import useIsNew from '../hooks/useIsNew';
import {
  ThemeContext,
  Mydark,
  Mylight,
} from '../context/Theme/ThemeContextProvider';
import Camera from './Camera/Camera';

const Stack = createNativeStackNavigator<RootStack>();

const Screens: React.FC = () => {
  const {isNewUser} = useIsNew();
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme === 'dark' ? Mydark : Mylight}>
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
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
