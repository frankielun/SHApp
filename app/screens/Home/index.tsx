import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel, {ParallaxImage, AdditionalParallaxProps} from 'react-native-snap-carousel';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as superheroActions from '../../store/actions/superheroActions';
import { superHeroReducers } from '../../store/reducers/superHeroReducer';
import styles from './styles';

interface ISuperHeros {
  image: {
    url: string;
  };
  name: string;

}

const { width: screenWidth } = Dimensions.get('window');

const Home: React.FC = () => {
  const superheros = useSelector(state => state.superHeroReducers.superHeros);
  const carouselRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(superheroActions.requestTenMoreSuperHero(page))
  }, [page]);

  const renderItem = ({ item }: {
    item: ISuperHeros;
    index: number;
}, parallaxProps?: AdditionalParallaxProps | undefined) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.image?.url}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
         <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 160}
          data={superheros}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
