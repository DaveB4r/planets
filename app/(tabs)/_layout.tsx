import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from '@/constants/Colors';

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:
          colorScheme === "dark" ? Colors.PRIMARYDARK : Colors.PRIMARY,
        headerStyle: {
          borderBottomWidth: 2,
          borderBottomColor:
            colorScheme === "dark" ? Colors.PRIMARYDARK : Colors.PRIMARY,
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
        },
      }}
    >
      <Tabs.Screen name='home' options={{
        tabBarLabel: "Planets",
        tabBarIcon: ({color}) => <Ionicons name="planet" size={24} color={color} />
      }}/>
      <Tabs.Screen name='favorites' options={{
        tabBarLabel: "Favorites",
        tabBarIcon: ({color}) => <Ionicons name="star" size={24} color={color} />
      }}/>
    </Tabs>
  )
}

export default TabLayout