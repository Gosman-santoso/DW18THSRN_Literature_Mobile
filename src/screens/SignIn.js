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

export default function SignIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.cover}
          source={require("../../assets/img/quillWhite.png")}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.main}>
        <Text style={styles.h1}>LOGIN</Text>

        <View style={styles.boxInput}>
          <View style={styles.username}>
            <Text style={styles.small}>Email</Text>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#a3a3a3"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.username}>
            <Text style={styles.small}>Password</Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#a3a3a3"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.login}
            onPress={() => props.navigation.navigate("Main")}
          >
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.p}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  //   header -----------------------
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center"
  },
  cover: {
    width: "25vh",
    height: "25vh"
  },
  textInput: {
    fontFamily: "poppins-regular",
    fontSize: 16,
    paddingLeft: 10,
    color: "#f7f7f7",
    borderBottomWidth: 0.5,
    borderColor: "#f7f7f7"
  },
  //   main -----------------------
  main: {
    flex: 1.5,
    justifyContent: "center"
    // backgroundColor: "lightblue"
  },
  username: {
    marginBottom: "5vh"
  },
  login: {
    width: "80%",
    margin: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#AF2E1C"
  },
  textLogin: {
    color: "#f7f7f7",
    fontWeight: "bold",
    fontFamily: "poppins-regular"
  },
  //   footer -----------------------
  footer: {
    flex: 0.5
  },
  //   tag
  h1: {
    fontSize: 20,
    fontFamily: "poppins-medium",
    color: "#f7f7f7",
    marginBottom: "3vh"
  },
  p: {
    fontFamily: "poppins-regular",
    color: "#f7f7f7"
  },
  small: {
    fontFamily: "poppins-regular",
    fontSize: 12,
    color: "#8f8f8f"
  }
});
