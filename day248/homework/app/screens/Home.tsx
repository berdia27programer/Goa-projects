import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View
            style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
        >
            <Text style={[styles.h1, {fontWeight: 700}]}>This is the Home page</Text>
            <Text style={[styles.normText, {fontWeight: 400}]}>You can move to the next to pages</Text>
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