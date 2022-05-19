import React, {memo} from 'react';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import profile from '../../assets/tanjiro.jpeg';
import {Rswitch} from '../../RUI';
import RBackground from '../../RUI/RBackground';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const {colors} = useTheme();
  return (
    <RBackground>
      <DrawerContentScrollView {...props}>
        <RBackground style={[styles.Box]}>
          <Image style={[styles.Image]} source={profile} />
          <Rswitch />
        </RBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </RBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  Box: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(CustomDrawer);
