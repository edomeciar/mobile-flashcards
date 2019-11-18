import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function DecksListScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Decks</Text>
    </ScrollView>
  );
}

DecksListScreen.navigationOptions = {
  title: "Decks H"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
