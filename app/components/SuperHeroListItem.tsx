import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'
import { ISuperHeros } from '../@types/index';

const SuperHeroListItem: React.FC<ISuperHeros> = (item) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={{ width: 80, height: 200 }}
        source={{
            uri: item.image?.url,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SuperHeroListItem;
