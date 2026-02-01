import { Text, View, Modal, Alert, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const showAlert = () => {
    Alert.alert(
      "Welcome back",
      "Here you can open the model to add an user",
      [
        {
            text: "Ok"
        }
      ]
    )
  }

  useEffect(showAlert, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal visible={() => setIsDisplayed(false)} animationType="slide">
        <View>
            <TextInput placeholder="name" onChangeText={setName} />
            <TextInput placeholder="email" onChangeText={setEmail} />
            <TextInput placeholder="password" onChangeText={setPassword} />
            <Button title="submit" />

            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
        </View>
      </Modal>

      <Button title="Add an user modal" onPress={() => setIsDisplayed(true)} />
    </View>
  );
}