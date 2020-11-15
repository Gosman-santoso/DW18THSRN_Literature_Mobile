import React from "react";
import { StyleSheet, View, Image, Button } from "react-native";

import InputSearch from "../component/input-search";
import ListLiterature from "../component/list-literature";

export default function Main(props) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/img/Group4.png")}
          />
          <View style={styles.ul}>
            <Button
              color="transparent"
              onPress={() => props.navigation.navigate("Main")}
              title="Main"
            />
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
              onPress={() => props.navigation.navigate("Landing")}
              title="Logout"
            />
          </View>
        </View>
        <InputSearch />
        <ListLiterature />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616"
  },
  main: {
    alignItems: "center"
  },
  tinyLogo: {
    width: "30vh",
    height: "10vh"
  },
  item: {
    marginTop: "5vh"
  },
  ul: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "10vh"
  }
});
