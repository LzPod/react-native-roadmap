import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/homeScreen/home.screen";
import CreditsScreen from "../../screens/creditsScreen/credits.screen";
import {Ionicons} from "@expo/vector-icons";
import COLORS from "../../../values/colors";
import styles from "./bottomtab.styles";

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name={route.name === "Home" ? "home" : "information-circle"} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: COLORS.white.main,
                tabBarInactiveTintColor: COLORS.blue.pale.light,
                tabBarStyle: styles.tabBar
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Credits" component={CreditsScreen}/>
        </Tab.Navigator>
    )
}