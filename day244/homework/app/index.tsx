import { useState } from "react";
import { Text, View, Modal, Button, TextInput } from "react-native";

export default function Index() {
  const [isEditorVisible, setIsEditorVisible] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal>
        <View>
            <TextInput placeholder="Title" onChangeText={setTitle} />
            <TextInput placeholder="Description" onChangeText={setDescription} />
            <Button title="submit" onPress={setIsEditorVisible(false)} />

            <Text>{title}</Text>
            <Text>{description}</Text> 
        </View>
      </Modal>

      <Button title="Open Post model" onPress={setIsEditorVisible(true)} />
    </View>
  );
}
