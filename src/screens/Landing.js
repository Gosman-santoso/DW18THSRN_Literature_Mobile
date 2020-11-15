import React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Landing(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.cover}
          source={require("../../assets/img/Group4.png")}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.main}>
        <View style={styles.boxGuide}>
          <View style={styles.lineStyle} />
          <Text style={styles.textGuide}>Lets get started</Text>
          <View style={styles.lineStyle} />
        </View>

        <TouchableOpacity
          style={styles.signIn}
          onPress={() => props.navigation.navigate("SignIn")}
        >
          <Text style={styles.textSign}>Sign in or create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.italic}>
          Sign in and receive unlimited accesss to all of your literature
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    paddingHorizontal: 30
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#AF2E1C",
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // borderWidth: 1,
    // shadowColor: "#f7f7f7",
    // shadowRadius: 10,
    // shadowOpacity: 0.8
  },
  main: {
    flex: 0.4,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // paddingVertical: 50,
  },
  boxGuide: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cover: {
    width: "40vh",
    height: "15vh",
    paddingHorizontal: 5
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#f7f7f7",
    margin: 10,
    flex: 1
  },
  p: {
    color: "#f7f7f7",
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "poppins-regular"
  },
  italic: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#f7f7f7",
    fontFamily: "poppins-regular",
    display: "flex",
    justifyContent: "center",
    width: "80%",
    textAlign: "center"
  },
  textGuide: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#f7f7f7",
    fontFamily: "poppins-regular",
    flex: 2,
    display: "flex",
    justifyContent: "center"
  },
  signIn: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "#AF2E1C"
  },
  textSign: {
    color: "#f7f7f7",
    fontWeight: "bold",
    fontFamily: "poppins-regular"
  }
});
