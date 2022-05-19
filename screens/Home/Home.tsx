import {View} from 'react-native';
import React from 'react';
import {Rbackground, Rtext} from '../../RUI';

const Home: React.FC = () => {
  return (
    <Rbackground>
      <View>
        <Rtext>Home</Rtext>
      </View>
    </Rbackground>
  );
};

export default Home;
