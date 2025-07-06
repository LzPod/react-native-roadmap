import {FlatList, Text, View} from "react-native";
import categories from "../../../data/categories";
import {useCallback} from "react";
import Category from "../../../models/category";
import Card from "../../atoms/category/category.atom";
import {NavigationProp} from "@react-navigation/native";
import styles from "./home.styles";

type HomeScreenProps = {
    navigation: NavigationProp<any>;
}

export default function HomeScreen( {navigation}:HomeScreenProps) {

    const renderProduct = useCallback(
        ({ item }: { item: Category }) => (
            <Card
                name={item.name}
                image={item.image}
                onPress={() => {
                    navigation.navigate(item.route);
                }}
            />
        ),
        [navigation],
    );

    return <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <FlatList
            // keyExtractor non c'è, non ho gli id, ma non ho necessità perché ogni categoria ha la propria route
            data={categories}
            renderItem={renderProduct}
            numColumns={2}
            columnWrapperStyle={styles.grid}
        />
    </View>
}



