import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent center metterebbe in mezzo allo schermo
        padding: 20,
        gap: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default styles;