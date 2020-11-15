import React from "react";
import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";

export default function Profile(props) {
  const DATA = [
    {
      id: "1",
      fullName: "Haris Astina",
      email: "haris@gmail.com",
      address: "Jakarta",
      gender: "Male",
      contact: "0876-2837-9987"
    }
  ];

  const LITERATURE = [
    {
      id: "1",
      title: "Sistem Informasi",
      author: "Haris Astina",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    },
    {
      id: "2",
      title: "Management Sistem",
      author: "Haris Astina",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    }
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View style={{ borderRadius: "50%", overflow: "hidden" }}>
          <Image
            style={styles.avatar}
            source={{
              uri: `https://drive.google.com/uc?id=1x2s-hwFDl2SYipZ8BH5s2w0oUcfXbBdZ`
            }}
          />
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            background: "#252525",
            width: "100%",
            padding: 20,
            marginTop: "5vh"
          }}
        >
          <Text style={styles.p}>{item.fullName}</Text>
          <Text style={styles.p}>{item.email}</Text>
          <Text style={styles.p}>{item.address}</Text>
          <Text style={styles.p}>{item.gender}</Text>
          <Text style={styles.p}>{item.contact}</Text>
        </View>
      </View>
    );
  };

  const renderLiterature = ({ item, index }) => {
    return (
      <View style={styles.literature}>
        <Image
          style={styles.imgLiter}
          source={{
            uri: `https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m`
          }}
        />
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.pLit}>{item.title}</Text>
          <Text style={styles.pLit}>{item.author}</Text>
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
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: "20",
              fontWeight: "bold",
              marginTop: "5vh",
              marginLeft: "3vh"
            }}
          >
            My Literature
          </Text>
          <FlatList
            data={LITERATURE}
            renderItem={renderLiterature}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <Text style={styles.p}></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616"
  },
  ul: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "10vh"
  },
  tinyLogo: {
    width: "30vh",
    height: "10vh"
  },
  avatar: {
    width: "30vh",
    height: "30vh"
  },
  p: {
    color: "white",
    marginBottom: "5"
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "auto"
  },
  literature: {
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
  pLit: {
    fontSize: "3vh"
  }
});
