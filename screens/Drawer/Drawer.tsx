import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import {RootStack} from '../../App.types';

const Draw = createDrawerNavigator<RootStack>();

export default function Drawer() {
  return (
    <Draw.Navigator initialRouteName="Home">
      <Draw.Screen name="Home" component={Home} />
      <Draw.Screen name="Contact" component={Contact} />
    </Draw.Navigator>
  );
}
