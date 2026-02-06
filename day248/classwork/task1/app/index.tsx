import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Home } from "./screens/Home"
import { About } from "./screens/About"

const Tab = createBottomTabNavigator()

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={<Home />} />
          <Tab.Screen name="About" component={<About />} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
