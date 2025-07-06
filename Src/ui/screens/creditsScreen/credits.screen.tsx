import {Text} from "react-native";
import {NavigationProp} from "@react-navigation/native";

type CreditsScreenProps = {
    navigation: NavigationProp<any>;
};
export default function CreditsScreen({navigation}:CreditsScreenProps) {
    return <>
        <Text>CreditsScreen</Text>
    </>
}