import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Button
} from "react-native";

export default function TodoForm({ addTodo }) {
  const [text, settext] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={"Add todo..."}
        onChangeText={text => settext(text)}
        value={text}
      />
      <Button
        title="Add Todo"
        color="coral"
        onPress={(() => addTodo(text))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 8,
    borderBottomColor: "coral",
    borderBottomWidth: 3
  }
});
