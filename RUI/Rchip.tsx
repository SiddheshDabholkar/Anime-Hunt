import {StyleProp, StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import Rtext from './Rtext';

type RChipType = {
  text: string;
  style?: StyleProp<ViewStyle>;
  lightBgColor?: string;
  lightTextColor?: string;
  darkBgColor?: string;
  darkTextColor?: string;
};

const Rchip: React.FC<RChipType> = ({
  text,
  style,
  lightTextColor,
  darkTextColor,
}) => {
  return (
    <TouchableOpacity style={[styles.view, style]}>
      <Rtext
        style={[styles.text]}
        darkTxtColor={darkTextColor}
        lightTxtColor={lightTextColor}>
        {text}
      </Rtext>
    </TouchableOpacity>
  );
};

export default Rchip;

const styles = StyleSheet.create({
  view: {
    borderRadius: 10,
    backgroundColor: '#7182ff94',
    minWidth: 'auto',
    alignSelf: 'flex-start',
    flexDirection: 'column',
    margin: 4,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
});
