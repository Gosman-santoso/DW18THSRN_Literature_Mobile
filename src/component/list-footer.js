import React, { useState } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

export default function Footer(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/img/Group4.png")}
      />
      <View style={styles.main}>
        <Button
          color="transparent"
          onPress={() => props.navigation.navigate("Profile")}
          title="Profile"
        />
        <Button
          color="transparent"
          onPress={() => props.navigation.navigate("Collection")}
          title="Collection"
        />
        <Button
          color="transparent"
          onPress={() => props.navigation.navigate("Add")}
          title="Add"
        />
        <Button
          color="transparent"
          onPress={() => props.navigation.navigate("Logout")}
          title="Logout"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    justifyContent: "center",
    alignItems: "center"
  },
  tinyLogo: {
    width: "30vh",
    height: "10vh"
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "10vh"
  }
});
