import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen/home.screen";
import LandingScreen from "../screens/landingScreen/landing.screen";
import HooksScreen from "../screens/hooksScreen/hooks.screen";
import EdittextScreen from "../screens/editTextScreen/edittext.screen";
import CreditsScreen from "../screens/creditsScreen/credits.screen";
import BottomTabs from "./bottomTab/bottomtab";
import FetchScreen from "../screens/fetchScreen/fetch.screen";


const Stack = createNativeStackNavigator();

export default function RootStack() {
    return <Stack.Navigator>
        <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="MainTabs"
            component={BottomTabs}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Hooks" component={HooksScreen} />
        <Stack.Screen name="EditText" component={EdittextScreen} />
        <Stack.Screen name="Fetch" component={FetchScreen} />
    </Stack.Navigator>
}

