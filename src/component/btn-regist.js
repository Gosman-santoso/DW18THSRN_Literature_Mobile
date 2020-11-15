import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

const styles = StyleSheet.create({
  btnRegist: {
    backgroundColor: "#AF2E1C",
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 3
  }
});

export default function BtnRegist() {
  return (
    <View style={styles.btnRegist}>
      <Text style={{ color: "white" }}>Regist</Text>
    </View>
  );
}
