import React, { useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";

export default function TodoForm({ addTodo }) {
  const [text, settext] = useState("");

  const handleSubmit = () => {
    if (text.length > 3) {
      addTodo(text);
      settext("");
    } else {
      Alert.alert(
        "OOPS!",
        "Add it more clear with more characters!",
        [
          {
            text: "No Matters",
            onPress: () => {
              addTodo(text);
              settext("");
            },
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  };

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
        onPress={() => handleSubmit(text)}
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
