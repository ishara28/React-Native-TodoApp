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
        "Todo must be more than 3 char long!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
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
