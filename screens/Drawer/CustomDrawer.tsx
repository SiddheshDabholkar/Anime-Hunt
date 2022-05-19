import React, {memo} from 'react';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import profile from '../../assets/tanjiro.jpeg';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.Box, {backgroundColor: colors.background}]}>
          <Image style={[styles.Image]} source={profile} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Box: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});

export default memo(CustomDrawer);
