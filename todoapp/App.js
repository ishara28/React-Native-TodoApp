import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";



export default function App() {
  const [todo, settodo] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" }
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>
      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  content: {
    padding: 40
  },
  list: {
    padding : 10,
    backgroundColor : "#f5f5f0"
  },
  text : {
    padding : 10,
    margin : 10,
    backgroundColor : "#c2c2a3"
  }
  
});
