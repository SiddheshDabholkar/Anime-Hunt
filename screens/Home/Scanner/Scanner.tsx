import {
  StyleSheet,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Rbackground, Rtext} from '../../../RUI';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Scanner = () => {
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setFilePath(response);
      });
    }
  };

  const {navigate} = useNavigation();
  return (
    <Rbackground style={[styles.container]}>
      <Rbackground style={[styles.card]}>
        <FastImage
          style={[styles.image]}
          source={require('../../../assets/zenitsu.gif')}
          resizeMode="cover"
        />
        <View style={[styles.content]}>
          <Rtext style={[styles.text]}>Scan the anime</Rtext>
          {/* <TouchableOpacity onPress={() => navigate('Camera')}> */}
          <TouchableOpacity onPress={() => captureImage('photo')}>
            <FastImage
              style={[styles.icon]}
              source={require('../../../assets/scan.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </Rbackground>
    </Rbackground>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  icon: {
    height: 50,
    width: 50,
  },
});
