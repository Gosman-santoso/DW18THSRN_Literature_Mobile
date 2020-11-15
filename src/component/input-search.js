import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { BsSearch } from "react-icons/bs";

export default function InputSearch() {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputSearch}>
      <View style={{ backgroundColor: "gray", flexDirection: "row" }}>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderWidth: 2,
            borderColor: "white",
            color: "white",
            borderRadius: 5,
            padding: 10
          }}
          placeholder="Search"
          placeholderTextColor="white"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputSearch: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 3,
    color: "white",
    width: "100%",
    margin: "auto"
  }
});
