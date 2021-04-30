import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingTop: 12
  },
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
    backgroundColor: 'black'
  }
});

export default styles;
