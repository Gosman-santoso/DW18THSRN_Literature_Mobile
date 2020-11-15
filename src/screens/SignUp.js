import React from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

export default function SignUp() {
  return (
    <View>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#cfcfcf"
        style={styles.textInput}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "f7f7f7"
  }
});
