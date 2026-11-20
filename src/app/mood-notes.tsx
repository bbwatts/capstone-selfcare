import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "expo-router/build/react-navigation/index.js";
import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredText: {
    width: "100%",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    width: "20%",
  },
  statusmessage: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    marginVertical: 10,
  },
});

export default function MoodNoteScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.centeredText}>Mood Notes</Text>
      <Text style={styles.statusmessage}>Status: </Text>
      <TextInput
        multiline={true}
        maxLength={200}
        placeholder="Enter your mood note"
        style={styles.inputText}
      />
      <View style={styles.button}>
        <Button title="Save Note" onPress={() => {}} />
      </View>
      <View style={styles.button}>
        <Button title="Sync Notes" onPress={() => {}} />
      </View>
      <Text style={styles.centeredText}>Saved Notes:</Text>
      <FlatList 
        data={[]}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  // need to have a screen to save mood notes with a text input and a button to save the note to async storage. The notes should be saved with a timestamp and displayed in a list below the input. The user should be able to delete notes from the list.
}