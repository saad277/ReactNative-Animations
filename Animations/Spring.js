import React, {Component} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';

class Spring extends Component {
  constructor() {
    super();

    this.springValue = new Animated.Value(0.3);
  }

  spring = () => {
    this.springValue.setValue(0.3);

    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start(() => this.spring());
  };

  componentDidMount() {
    this.spring();
  }

  render() {
    // console.log(this.spinValue);

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{scale: this.springValue}],
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spring;
