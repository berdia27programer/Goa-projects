import { Text, View, TextInput, KeyboardAvoidingView, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        
        <KeyboardAvoidingView>
          <TextInput style={styles.input} keyboardType="default" placeholder="Enter text" />
          <TextInput style={styles.input} keyboardType="email-address" placeholder="Enter email" />
          <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter number" />
          <TextInput style={styles.input} keyboardType="phone-pad" placeholder="Enter phone number" />
          <TextInput style={styles.input} keyboardType="url" placeholder="Enter URL" />
          <TextInput style={styles.input} keyboardType="decimal-pad" placeholder="Enter decimal number" />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 250,
  },
});