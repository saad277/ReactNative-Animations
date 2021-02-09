// Inspiration: https://dribbble.com/shots/14139308-Simple-Scroll-Animation
// Illustrations by: SAMji https://dribbble.com/SAMji_illustrator
import * as React from 'react';
import {
    StatusBar,
    FlatList,
    Image,
    Animated,
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { data } from "./data"
import styles from "./Styles"

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const Carousel = () => {

    const scrollX = React.useRef(new Animated.Value(0)).current

    const renderItem = ({ item }) => {

        return (<View style={styles.imageContainer}>
            <Image
                source={{ uri: item }}
                style={styles.image}
            />
        </View>)
    }

    return (
        <View style={styles.container}>

            <StatusBar hidden />

            <View
                style={[StyleSheet.absoluteFill]}
            >
                {data.map((image, index) => {

                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })

                    return (
                        <Animated.Image
                            key={`image-${index}`}
                            source={{ uri: image }}
                            style={[StyleSheet.absoluteFill, { opacity: opacity }]}
                            blurRadius={50}
                        />)
                })}
            </View>

            <Animated.FlatList
                data={data}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                horizontal={true}
                pagingEnabled={true}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Carousel;