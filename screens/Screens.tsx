import {RootStack} from '../App.types';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Drawer from './Drawer/Drawer';
import Onboard from './OnBoard/Onboard';
import {
  ThemeContext,
  Mydark,
  Mylight,
} from '../context/Theme/ThemeContextProvider';
import Camera from './Camera/Camera';
import {storage} from '../App';
import MangaPage from './Manga/Manga';
import AnimePage from './Anime/Anime';

const Stack = createNativeStackNavigator<RootStack>();

const Screens: React.FC = () => {
  const [isNewUser, setNewUser] = useState(true);
  useEffect(() => {
    if (!storage.contains('isNew')) {
      setNewUser(true);
      storage.set('isNew', false);
      console.log(storage.getBoolean('isNew'));
    } else {
      setNewUser(false);
    }
  }, []);
  console.log('isNewUser', isNewUser);

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen
          name="Manga"
          component={MangaPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Anime"
          component={AnimePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
