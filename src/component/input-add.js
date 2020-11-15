import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { BsSearch } from "react-icons/bs";

export default function InputAdd() {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputAdd}>
      <View style={{ backgroundColor: "gray" }}>
        <TextInput
          style={styles.inputan}
          placeholder="Title"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={styles.inputan}
          placeholder="Publication"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={styles.inputan}
          placeholder="Pages"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={styles.inputan}
          placeholder="ISBN"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={styles.inputan}
          placeholder="Author"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={styles.inputan}
          placeholder="Status"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={styles.inputan}
          placeholder="File"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={styles.inputan}
          placeholder="Thumbnail"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
      </View>
      <Button title="submit" color="#AF2E1C" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputAdd: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 3,
    color: "white",
    width: "100%",
    margin: "auto"
  },
  inputan: {
    width: "100%",
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
