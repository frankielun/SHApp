import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel, {
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from 'react-native-paper';
import * as superheroActions from '../../store/actions/superheroActions';
import styles from './styles';
import CarouselItem from '../../components/CarouselItem';
import { SuperHeroListItem } from '../../components';
import { ISuperHeros } from '../../@types';
import NavigationService from '../../navigation/NavigationService';

const { width: screenWidth } = Dimensions.get('window');


const Home: React.FC = () => {
  const superHeros: ISuperHeros[] = useSelector(state => state.superHeroReducers.superHeros);
  const carouselRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  const top10Heros = superHeros.slice(0, 10);
  const otherHeros = superHeros.slice(10, superHeros.length);

  React.useEffect(() => {
    dispatch(superheroActions.requestTenMoreSuperHero(page));
  }, [page]);

  const renderItem = (
    {
      item,
      index
    }: {
      item: ISuperHeros;
      index: number;
    },
    parallaxProps?: AdditionalParallaxProps | undefined,
  ) => {
    return (
      <CarouselItem key={`carousel_${index}`} item={item} parallaxProps={parallaxProps} onPress={() => {
        NavigationService.navigate('HeroDetail', { item });
      }} />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} onMomentumScrollEnd={() => {
        setPage(page + 1);
      }}>
        <Title style={styles.title}>First 10 Heros</Title>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 160}
          data={top10Heros}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
        <Title style={styles.title}>Other Heros</Title>
        <View style={styles.imageContainer}>
          {
            otherHeros.map((item, index) => <SuperHeroListItem key={`otherHeros_${index}`} item={item} onPress={() => {
              NavigationService.navigate('HeroDetail', { item });
            }}/>)
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
