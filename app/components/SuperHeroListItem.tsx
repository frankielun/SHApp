import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import FastImage from 'react-native-fast-image'
import { ISuperHeros } from '../@types/index';

const { width: screenWidth } = Dimensions.get('window');
interface IProps {
  item: ISuperHeros;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const imageWidth = screenWidth / 3;

const SuperHeroListItem = ({ item, onPress } :IProps) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FastImage
        style={{ width: imageWidth - 4, height: 170 }}
        source={{
            uri: item.image?.url,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: imageWidth
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'black',
  },
});

export default SuperHeroListItem;
