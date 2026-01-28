import { useState } from "react";
import { Text, View, Modal, TextInput, Button } from "react-native";

export default function Index() {
  const [isEditorVisible, setIsEditorVisible] = useState(false)
  const [name, setName] = useState("bmw")
  const [model, setModel] = useState("m5 competiotion")
  const [year, setYear] = useState("idk to be honest")
  const [color, setColor] = useState("black")

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        visible={isEditorVisible}
        animationType="slide"
        onRequestClose={() => setIsEditorVisible(false)}
      >
        <View>
          <Text>BMW m5 competition</Text>
          <TextInput placeholder="name" onChangeText={setName} />
          <TextInput placeholder="model" onChangeText={setModel} />
          <TextInput placeholder="year" onChangeText={setYear} />
          <TextInput placeholder="color" onChangeText={setColor} />
          <Button title="Cancel" onPress={() => setIsEditorVisible(false)} />
          <Button title="Submit" onPress={() => setIsEditorVisible(false)} />
        </View>
      </Modal>

      <Button title="Open car modal" onPress={() => setIsEditorVisible(true)} />
    </View>
  );
}
