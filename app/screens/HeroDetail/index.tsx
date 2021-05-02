import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/core';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { ISuperHeros } from '../../@types/index';
import HeroBasicDetail from './HeroBasicDetail';
import HeroPowerDetail from './HeroPowerDetail';

const { width: screenWidth } = Dimensions.get('window');
interface IProps {
  item: ISuperHeros;
}

const HeroDetail = () => {

  const route = useRoute();
  const { item } = route.params as IProps;
  return (
    <View style={styles.container}>
      <HeroBasicDetail item={item} />
      <HeroPowerDetail item={item} />
    </View>
  );
};

export default HeroDetail;
