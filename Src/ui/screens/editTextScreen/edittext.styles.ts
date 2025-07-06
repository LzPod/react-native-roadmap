import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        gap: 30
    },
    title: {
        fontSize: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    borderContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 30,
    }
});

export default styles;