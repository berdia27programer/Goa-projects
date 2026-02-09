import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function About() {
  const navigation = useNavigation()

    return (
        <View
            style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
        >
            <Text style={[styles.h1, {fontWeight: 700}]}>This is the About page</Text>
            <Text style={[styles.normText, {fontWeight: 400}]}>You can move to the next to pages</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 20
    },
    normText: {
        fontSize: 18
    }
})