import {StyleSheet} from 'react-native';
import {width} from '../../RUI';

export const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  card: {
    width: width / 3,
    height: 220,
    margin: 6,
    overflow: 'hidden',
  },
  img: {
    overflow: 'hidden',
    borderRadius: 10,
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
