import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  Camera as VisionCamera,
  useCameraDevices,
} from 'react-native-vision-camera';

export default function Camera() {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  useEffect(() => {
    const askForPermissions = async () => {
      await VisionCamera.requestCameraPermission();
    };
    askForPermissions();
  }, []);

  if (device == null) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={[styles.container]}>
      <VisionCamera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
