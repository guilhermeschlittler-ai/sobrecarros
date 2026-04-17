import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ff33d",
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >   
         <Tabs.Screen
           name="index"
           options={{
              title: "Inicio",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "car" : "car-outline"} size={24} color={color} />
              ),
           }}
        />
        <Tabs.Screen
           name="about"
           options={{
              title: "Sobre",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "information" : "information-outline"} size={24} color={color} />
              ),
           }}
        />
        </Tabs>
    );  
}
