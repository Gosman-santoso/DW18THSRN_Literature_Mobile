import React from "react";

import { StyleSheet, View, Text } from "react-native";
import { Fontisto, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function Guide(props) {
  return (
    <View style={styles.boxUse}>
      <View style={styles.search}>
        <Fontisto name="search" size={30} color="white" />
        <Text style={styles.p}>Search</Text>
      </View>
      <View style={styles.select}>
        <MaterialCommunityIcons
          name="cursor-default-outline"
          size={30}
          color="white"
        />
        <Text style={styles.p}>Select</Text>
      </View>
      <View style={styles.download}>
        <Feather name="download" size={30} color="white" />
        <Text style={styles.p}>Download</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxUse: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  search: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  select: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  download: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  p: {
    color: "#f7f7f7",
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "poppins-medium"
  }
});
