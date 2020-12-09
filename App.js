import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ContactForm from "./screens/contactForm";
import Card from "./shared/card";

export default function App() {
  const [contacts, setContacts] = useState([
    { name: "test", location: "locTest", time: "somenumber", key: "1" },
    { name: "test2", location: "locTest2", time: "somenumber2", key: "2" },
  ]);

  const addContact = (contact) => {
    contact.key = Math.random().toString();
    setContacts((currentContacts) => {
      return [contact, ...currentContacts];
    });
  };

  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <FlatList
        data={contacts}
        style={styles.list}
        renderItem={({ item }) => (
          <Card>
            <Text>{item.name}</Text>
          </Card>
        )}
      />
      <ContactForm addContact={addContact} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "80%",
  },
});
