import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('screen');

const SPACING = 20;
const AVATAR_SIZE = 70;
export const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowOpacity: 1,
    shadowColor: 'red',
    shadowOffset: {width: 2, height: 10},
    shadowRadius: 20,
  },
  flatListContainer: {
    padding: SPACING,
    paddingTop: StatusBar.currentHeight || 42,
  },
  name: {
    color: 'black',
    fontSize: 22,
    fontWeight: '700',
  },
  jobTitle: {
    fontSize: 18,
    opacity: 0.7,
  },
  email: {
    fontSize: 12,
    opacity: 0.8,
  },

  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
});
