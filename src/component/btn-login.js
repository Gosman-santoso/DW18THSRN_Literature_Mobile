import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Button
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: "#AF2E1C",
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 3
  }
});

export default function BtnLogin() {
  return (
    <View style={styles.btnLogin}>
      <TouchableOpacity>
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
