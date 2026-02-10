import { Text, View } from "react-native";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { useContext } from "react";

const Tab = createBottomTabNavigator()

export default function Index() {
  const { user, logout } = useContext(AuthContext)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthProvider>
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={<Home />} />
          {
            !user ? <Tab.Screen name="Log out" options={onclick=logout()} /> : (
              <>
                <Tab.Screen name="Login" component={<Login />} />
                <Tab.Screen name="Signup" component={<Signup />} />
              </>
            )
          }
        </Tab.Navigator>
      </NavigationContainer>
      </AuthProvider>
    </View>
  );
}
