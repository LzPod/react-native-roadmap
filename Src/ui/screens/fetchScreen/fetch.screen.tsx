import {NavigationProp} from "@react-navigation/native";
import {View, Text, FlatList} from "react-native";
import styles from "./fetch.styles";
import {fetch} from "expo/fetch";
import {useEffect, useState} from "react";

type FetchScreenProps = {
    navigation: NavigationProp<any>;
}

type Movie = {
    id: string;
    title: string;
    releaseYear: string;
}

export default function FetchScreen( { navigation }: FetchScreenProps ) {
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json')
            const json = await response.json(); //Senza await, non puoi fare json.movies
            setMovies(json.movies)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return <View style={styles.container}>
        <Text>Fetch Screen</Text>
        <FlatList
            data={movies}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                <Text>
                    {item.title}, {item.releaseYear}
                </Text>
            )}
        />
    </View>
}