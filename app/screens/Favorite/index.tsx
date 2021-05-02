import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from 'react-native-paper';
import * as superheroActions from '../../store/actions/superheroActions';
import styles from './styles';
import CarouselItem from './CarouselItem';
import { SuperHeroListItem } from '../../components';
import { ISuperHeros } from '../../@types';
import NavigationService from '../../navigation/NavigationService';

const Favorite = () => {
  const superHeros: ISuperHeros[] = useSelector(state => state.superHeroReducers.favoriteList);

  if (!Array.isArray(superHeros) || superHeros.length === 0) {
    return (
      <View style={styles.container}>
          <Title style={styles.title}>No Saved Super Hero</Title>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Title style={styles.title}>Favorite Heros</Title>
        <View style={styles.imageContainer}>
          {
            superHeros.map((item, index) => <SuperHeroListItem key={`superHeros${index}`} item={item} onPress={() => {
              NavigationService.navigate('HeroDetail', { item });
            }}/>)
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorite;
