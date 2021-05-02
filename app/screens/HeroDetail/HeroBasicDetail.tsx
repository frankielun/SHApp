import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Headline, Paragraph, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import * as superheroActions from '../../store/actions/superheroActions';
import { ISuperHeros } from '../../@types/index';
import { SaveButton } from '../../components';

const { width: screenWidth } = Dimensions.get('window');
interface IProps {
  item: ISuperHeros;
}

const HeroBasicDetail = ({ item }: IProps) => {
  const favoriteList: ISuperHeros[] = useSelector(state => state.superHeroReducers.favoriteList);
  const isSaved = favoriteList.find(item => item.id === item.id);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <FastImage
          style={{ width: screenWidth / 4, height: 120 }}
          source={{
              uri: item.image?.url,
              priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.rightContent}>
        <Headline>{item.name}</Headline>
        <Paragraph numberOfLines={4}>First Appearance: {item.biography['first-appearance']}</Paragraph>
        <Paragraph numberOfLines={1}>Publisher: {item.biography.publisher}</Paragraph>
        <SaveButton isSaved={isSaved} onSave={() => dispatch(superheroActions.saveSuperHero(item))} onUnSave={() => dispatch(superheroActions.unSaveSuperHero(item))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  leftContent: {
    flex: 1
  },
  rightContent: {
    flex: 3,
    paddingLeft: 16
  },
  heroName: {
    marginTop: 24,
    fontSize: 20
  }
});

export default HeroBasicDetail;
