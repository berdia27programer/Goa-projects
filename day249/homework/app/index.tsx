import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Home } from "./screens/Home"
import { About } from "./screens/About"
import { Contact } from "./screens/Contact"
import Books from "./screens/Books";

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
          <Tab.Screen name="Books" component={<Books />} />
          <Tab.Screen name="About" component={<About />} />
          <Tab.Screen name="Contact" component={<Contact />} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
