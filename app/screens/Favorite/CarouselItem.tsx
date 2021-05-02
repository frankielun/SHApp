import React from 'react';
import { TouchableOpacity, Dimensions, Text, StyleSheet, Platform, GestureResponderEvent } from 'react-native';
import { ParallaxImage, AdditionalParallaxProps } from 'react-native-snap-carousel';
import { ISuperHeros } from '../../@types';

const { width: screenWidth } = Dimensions.get('window');

interface IProps {
  item: ISuperHeros;
  parallaxProps?: AdditionalParallaxProps;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const CarouselItem = ({ item, parallaxProps, onPress }: IProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <ParallaxImage
          source={{ uri: item?.image?.url }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item?.name}
        </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  item: {
    position: 'relative',
    width: screenWidth - 160,
    height: screenWidth - 20,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
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

export default CarouselItem;
