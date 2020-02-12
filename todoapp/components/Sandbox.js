import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxone}> One</Text>
      <Text style={styles.boxtwo}> Two</Text>
      <Text style={styles.boxthree}>Three</Text>
      <Text style={styles.boxfour}> Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  boxone: {
    backgroundColor: "violet",
    flex: 8,
    padding: 10
  },
  boxtwo: {
    backgroundColor: "coral",
    flex: 4,
    padding: 20
  },
  boxthree: {
    backgroundColor: "green",
    flex: 2,
    padding: 30
  },
  boxfour: {
    backgroundColor: "red",
    flex: 1,
    padding: 40
  }
});
