import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

function ContactForm({ addContact }) {
  return (
    <View>
      <Formik
        initialValues={{ name: "", location: "", time: "" }}
        onSubmit={(values) => {
          addContact(values);
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name of Contact"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Where did you contact the person"
              onChangeText={props.handleChange("location")}
              value={props.values.location}
            />
            <TextInput
              style={styles.input}
              placeholder="How long were you in contact with them"
              onChangeText={props.handleChange("time")}
              value={props.values.time}
            />

            <Button
              title="add contact"
              color="purple"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 18,
    borderRadius: 6,
    padding: 10,
    margin: 10,
  },
});

export default ContactForm;
