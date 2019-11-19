import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default DeckListItem = props => {
  handlePress = () => {
    props.onPress(props.deck);
  };

  const { title } = props.deck;
  const count = props.deck.questions.length;
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.deckName}>{title}</Text>
      <Text style={styles.deckCount}>
        {count} {count === 1 ? "card" : "cards"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 10,
    flex: 1
  },
  deckName: {
    fontSize: 24,
    textAlign: "center"
  },
  deckCount: {
    fontSize: 16,
    textAlign: "center"
  }
});
