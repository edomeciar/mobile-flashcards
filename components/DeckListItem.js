import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import Colors from "../constants/Colors";

export default DeckListItem = props => {
  handlePress = () => {
    props.onPress(props.deck);
  };

  const { title } = props.deck;
  const count = props.deck.questions.length;
  return (
    <View style={styles.container}>
      <View style={styles.deckTitle}>
        <Text style={styles.deckName}>{title}</Text>
        <Text style={styles.deckCount}>
          {` - ${count} # of Cards`}
        </Text>
      </View>
      <TouchableOpacity style={styles.openTouchable} onPress={handlePress}>
        <Text style={styles.openBtnText}>Open Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.tabIconDefault,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  deckTitle: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignItems: "baseline"
  },
  openTouchable: {
    flex: 1,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  deckName: {
    fontSize: 24,
    textAlign: "center"
  },
  deckCount: {
    fontSize: 16,
    textAlign: "center"
  },
  openBtnText: {
    color: Colors.tabIconSelected,
    fontSize: 22,
    textAlign: "center"
  }
});
