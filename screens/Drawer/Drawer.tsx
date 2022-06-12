import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import {RootStack} from '../../App.types';
import CustomDrawer from './CustomDrawer';
import Animelist from '../AnimeList/Animelist';
import Mangalist from '../MangaList/Mangalist';

const Draw = createDrawerNavigator<RootStack>();

export default function Drawer() {
  return (
    <Draw.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Draw.Screen name="Home" component={Home} />
      <Draw.Screen name="Contact" component={Contact} />
      <Draw.Screen name="Animelist" component={Animelist} />
      <Draw.Screen name="Mangalist" component={Mangalist} />
    </Draw.Navigator>
  );
}
