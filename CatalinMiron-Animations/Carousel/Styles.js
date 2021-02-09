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
const { width, height } = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    imageContainer: {
        width: width,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius:20,
    },
    image: {
        width: imageW,
        height: imageH,
        resizeMode: "cover",
        borderRadius: 16
    }
})

export default styles