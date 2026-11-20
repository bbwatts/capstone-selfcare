import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { View, TextInput, Button, Text, StyleSheet, FlatList } from "react-native";

type WalkNote = {
  text: string;
  createdAt: string;
  id: string;
  syncStatus: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredText: {
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
    width: "50%",
  },
  statusmessage: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    width: "30%",
    marginVertical: 10,
  },
});

export default function WalkNotesScreen() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<WalkNote[]>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      const savedNotes = await AsyncStorage.getItem('walkNotes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    };
    loadNotes();
  }, []);

  const saveNote = async () => {
    //uses trim to handle string better
    if (note.trim() === '') {
      setStatus('Please enter a note before saving.');
      return;
    }
    if (note.length > 200) {
      setStatus('Your note must be 200 characters or less.');
      return;
    }

    const newnote = { text: note.trim(), createdAt: new Date().toLocaleString(), id: Date.now().toString(), syncStatus: 'pending',};
    const updatedNotes = [...notes, newnote];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('walkNotes', JSON.stringify(updatedNotes));
    setNote('');
    setStatus('Note saved on this device.');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.centeredText}>Walk Notes</Text>
      <Text style={styles.statusmessage}>Status: {status}</Text>
      <TextInput
        multiline={true}
        maxLength={200}
        value={note}
        onChangeText={setNote}
        placeholder="Enter a note about your walk."
        style={styles.inputText}
      />
      <Text>{note.length} / 200 characters</Text>
      <View style={styles.button}>
        <Button title="Save Note" onPress={saveNote} />
      </View>
      <View style={styles.button}>
        <Button title="Sync Now" onPress={() => {}} />
      </View>
      <Text style={styles.centeredText}>Saved Notes:</Text>
      <FlatList 
        style={{ flexGrow: 0 }}
        data={notes}
        renderItem={({ item }) => <Text>{item.createdAt} - {item.text} ({item.syncStatus})</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  // need to have a screen to save mood notes with a text input and a button to save the note to async storage. The notes should be saved with a timestamp and displayed in a list below the input. The user should be able to delete notes from the list.
}