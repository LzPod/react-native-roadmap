import {StyleSheet} from "react-native";
import COLORS from "../../../values/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.blue.dark,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.white.main,
    },
    button: {
      backgroundColor: COLORS.blue.pale.dark,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
    glow: {
        position: 'absolute',
        tintColor: '#00d8ff',
        width: 300,
        height: 300,
        opacity: 0.2,
    },
})

export default styles;