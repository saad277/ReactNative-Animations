import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';

class Timings extends Component {
  constructor() {
    super();

    this.animatedValue = new Animated.Value(0);
  }

  animate = () => {
    this.animatedValue.setValue(0);

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.animate());
  };

  componentDidMount() {
    this.animate();
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });

    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0],
    });

    const rotateY = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg'],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [{translateX: marginLeft}],
            height: 30,
            width: 40,
            backgroundColor: 'red',
          }}></Animated.View>

        <Animated.View
          style={{
            marginTop: 10,
            opacity,
            height: 30,
            width: 40,
            backgroundColor: 'green',
          }}></Animated.View>

        <Animated.View
          style={{
            height: 30,
            width: 40,
            backgroundColor: 'brown',
            transform: [{translateX: movingMargin}],
          }}></Animated.View>
        <Animated.View
          style={{
            transform: [{rotateY}],
            marginTop: 50,
            height: 30,
            width: 40,
            backgroundColor: 'black',
          }}></Animated.View>
        <Text style={{color: 'black'}}>Hello from TransformX</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
  },
});

export default Timings;
