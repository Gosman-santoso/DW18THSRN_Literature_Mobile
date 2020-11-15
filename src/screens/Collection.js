import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Button
} from "react-native";

const Collection = props => {
  const DATA = [
    {
      id: "3",
      title: "Dokumen Informatika",
      author: "Cindi",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    }
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.imgLiter}
          source={{
            uri: `https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m`
          }}
        />
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.p}>{item.title}</Text>
          <Text style={styles.p}>{item.author}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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

      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    position: "relative"
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row"
  },
  title: {
    fontSize: 32
  },
  imgLiter: {
    width: "15vh",
    height: "15vh"
  },
  p: {
    fontSize: "3vh"
  },
  tinyLogo: {
    width: "30vh",
    height: "10vh"
  },
  ul: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "10vh"
  }
});

export default Collection;
