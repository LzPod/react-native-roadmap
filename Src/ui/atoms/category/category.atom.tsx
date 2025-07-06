import {Image, TouchableOpacity, Text, View} from "react-native";
import styles from "./category.styles";

interface CategoryProps {
    name: string;
    image: string;
    onPress: () => void;
}

const Card = ({name, image, onPress}: CategoryProps) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: image }} style={styles.image}/>
                <Text style={styles.title}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;