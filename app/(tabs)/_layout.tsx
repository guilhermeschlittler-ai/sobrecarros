import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ff33d",
            }}
        >   
         <Tabs.Screen
           name="index"
           options={{
              title: "Casa",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
              ),
           }}
        />
        <Tabs.Screen
           name="about"
           options={{
              title: "Sobre",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={24} color={color} />
              ),
           }}
        />
        </Tabs>
    );  
}
