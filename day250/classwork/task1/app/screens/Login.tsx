import { useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const { login } = useContext(AuthContext)

    return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Text>Login</Text>
            <TextInput placeholder="Enter your email" />
            <TextInput placeholder="Enter your password" />
            <Button title="Submit" onPress={login()} />
        </View>
    )
}