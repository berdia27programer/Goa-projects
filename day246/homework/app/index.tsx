import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      accessible={true}
    >
      <TouchableOpacity accessibilityLabel="Save file" accessibilityHint="Save a file" accessibilityRole="button">
        <Text>save</Text>
      </TouchableOpacity>

      <Switch accessibilityLabel="dark mode" accessibilityState={{ checked: isEnabled }} />
    </View>
  );
}
