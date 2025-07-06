import {StyleSheet} from "react-native";
import COLORS from "../../../values/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        gap: 20,
        backgroundColor: COLORS.blue.pale.dark,
    },
    title:{
      textAlign:"center",
      fontSize: 35,
      fontWeight: "bold",
        padding: 20,
        color: COLORS.white.main,
    },
    grid:{
        justifyContent:"space-evenly",
        alignItems:"center"
    }
});

export default styles;