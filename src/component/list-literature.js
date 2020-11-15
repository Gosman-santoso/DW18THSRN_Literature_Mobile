import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView
} from "react-native";

import Footer from "./list-footer";

const ListLiterature = () => {
  const DATA = [
    {
      id: "1",
      title: "Sistem Informasi",
      author: "Andi",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    },
    {
      id: "2",
      title: "Management Sistem",
      author: "Budi",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    },
    {
      id: "3",
      title: "Dokumen Informatika",
      author: "Cindi",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    },
    {
      id: "4",
      title: "UASBN 2012",
      author: "Dendi",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    },
    {
      id: "5",
      title: "Skripsi 2015",
      author: "Eko",
      thumbnail:
        "https://drive.google.com/uc?id=1pyX-I4fAEkmFRDfWiII94C0dJmILg-4m"
    }
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.tinyLogo}
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
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
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
  tinyLogo: {
    width: "15vh",
    height: "15vh"
  },
  p: {
    fontSize: "3vh"
  }
});

export default ListLiterature;
