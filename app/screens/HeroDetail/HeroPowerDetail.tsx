import React from 'react';
import { View, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { ISuperHeros } from '../../@types/index';
import { ProgressBar, Colors, Text, Headline } from 'react-native-paper';

const { width: screenWidth } = Dimensions.get('window');
interface IProps {
  item: ISuperHeros;
}

const PowerStatItem = ({name, power}: {name: string, power: number}) => {
  return (
    <View style={styles.powerStatContainer}>
      <Text style={styles.heroPowerName}>{name}</Text>
      <ProgressBar style={styles.powerBar} progress={power/100} color={Colors.blueGrey500} />
    </View>
    );
}

const HeroPowerDetail = ({ item }: IProps) => {
  return (
    <View style={styles.container}>
      <Headline>Power State</Headline>
      <PowerStatItem power={parseInt(item.powerstats.intelligence)} name="Intelligence" />
      <PowerStatItem power={parseInt(item.powerstats.combat)} name="Combat" />
      <PowerStatItem power={parseInt(item.powerstats.durability)} name="Durability" />
      <PowerStatItem power={parseInt(item.powerstats.power)} name="Power" />
      <PowerStatItem power={parseInt(item.powerstats.speed)} name="Speed" />
      <PowerStatItem power={parseInt(item.powerstats.strength)} name="Strength" />
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  powerStatContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heroPowerName: {
    width: '25%',
    textAlign: 'left'
  },
  powerBar: {
    width: screenWidth / 5 * 4 - 40
  }
});

export default HeroPowerDetail;
