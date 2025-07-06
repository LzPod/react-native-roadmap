import { Image, Text, View} from "react-native";
import styles from "./landing.styles";
import Button from "../../atoms/button/button.atom";
import {NavigationProp} from "@react-navigation/native";

type LandingScreenProps = {
    navigation: NavigationProp<any>;
}

export default function LandingScreen( {navigation}:LandingScreenProps ) {
    return <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image style={[styles.logo, styles.glow]} source={require("../../../../assets/images/devicon_reactnative.png")}/>
        <Image style={styles.logo} source={require("../../../../assets/images/devicon_reactnative.png")}/>
        </View>
        <Text style={styles.title}>React Native Roadmap</Text>
        <Button style={styles.button} title={"Avvia"} onPress={() => {
            navigation.navigate("MainTabs");
        }}/>
    </View>
}