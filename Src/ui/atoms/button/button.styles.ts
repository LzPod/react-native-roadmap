import { StyleSheet } from 'react-native';
import COLORS from "../../../values/colors";

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    button: {
        borderRadius: 35,
        padding: 20,
        paddingHorizontal: 40,
        elevation: 3,
        backgroundColor: COLORS.blue.dark
    },

})

export default styles;