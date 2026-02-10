import { useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
    const { register } = useContext(AuthContext)

    return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Text>Sign up</Text>
            <TextInput placeholder="Enter your name" />
            <TextInput placeholder="Enter your email" />
            <TextInput placeholder="Create a password" />
            <Button title="Submit" onPress={register()} />
        </View>
    )
}