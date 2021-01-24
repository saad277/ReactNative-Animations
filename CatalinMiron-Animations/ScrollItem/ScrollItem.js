// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/
import React from 'react';
import {
  FlatList,
  Image,
  Animated,
  Text,
  View,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
  StyleSheet
} from 'react-native';

import { styles } from "./Styles"

import faker from 'faker';

const BG_IMG = "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"

faker.seed(10);
const Data = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const ScrollItem = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.jobTitle}>{item.jobTitle}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View >
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={50}
      />
      <FlatList
        data={Data}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default ScrollItem;
