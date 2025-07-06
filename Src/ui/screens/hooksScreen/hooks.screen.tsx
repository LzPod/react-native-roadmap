import {NavigationProp} from "@react-navigation/native";
import {Text, View} from "react-native";
import { Divider } from '@rneui/themed';
import STRINGS from "../../../values/strings";
import styles from "./hooks.styles";

type HooksScreenProps = {
    navigation: NavigationProp<any>,
}

export default function HooksScreen( { navigation }: HooksScreenProps ) {

    return <View style={styles.container}>
        <Text style={styles.title}>
            {STRINGS.useState.title}
        </Text>
        <Text>
            {STRINGS.useState.description}
        </Text>
        <Divider>
    </Divider>
        <Text style={styles.title}>
            {STRINGS.useCallback.title}
        </Text>
        <Text>
            {STRINGS.useCallback.description}
        </Text>
        <Divider>
        </Divider>
        <Text style={styles.title}>
            {STRINGS.useEffect.title}
        </Text>
        <Text>
            {STRINGS.useEffect.description}
        </Text>
    </View>
}