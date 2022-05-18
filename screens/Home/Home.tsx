import {View} from 'react-native';
import React from 'react';
import Background from '../../components/Background';
import Mytext from '../../components/Mytext';

const Home: React.FC = () => {
  return (
    <Background>
      <View>
        <Mytext>Home</Mytext>
      </View>
    </Background>
  );
};

export default Home;
