import {Animated} from 'react-native';

export const createAnimation = (value, duration, easing, delay = 0) => {
  return Animated.timing(value, {
    toValue: 1,
    duration,
    easing,
    delay,
  });
};
