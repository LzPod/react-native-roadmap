import {NavigationProp} from "@react-navigation/native";
import {TextInput, View, Text} from "react-native";
import styles from "./edittext.styles";
import {useCallback, useState} from "react";
import Button from "../../atoms/button/button.atom";

type EdittextScreenProps = {
    navigation: NavigationProp<any>,
};

export default function EdittextScreen( { navigation }: EdittextScreenProps ) {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [convertedValue, setConvertedValue] = useState<number>(0);

    const convert = useCallback((value: number) => {
        setConvertedValue(value / 1.60934);
        console.log("convertito " + value);
    }, []);

    return <View style={styles.container}>
        <Text style={styles.title}>Convertitore Km → Miglia</Text>
        <View style={styles.inputContainer}>
            <View style={styles.borderContainer}>
                <TextInput keyboardType={"numeric"} onChangeText={(text) => setCurrentValue(parseFloat(text))}>
                </TextInput>
            </View>
            <Text> → </Text>
            <Text>{convertedValue.toFixed(2)} Miglia</Text>
        </View>
        <Button onPress={() => convert(currentValue)} title={"Converti"}/>
    </View>;
}