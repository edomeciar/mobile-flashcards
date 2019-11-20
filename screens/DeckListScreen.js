import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, Animated } from "react-native";
import { getDecks } from "../utils/api";
import DeckListItem from "../components/DeckListItem";
import { NavigationEvents } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import Colors from '../constants/Colors';

export default class DeckListScreen extends Component {
  state = {
    decks: {},
    bounceValue: new Animated.Value(1)
  };

  handleOnPress = deck => {
    this.props.navigation.navigate("Details", { title: deck.title });
  };

  onDidFocus = () => {
    title = this.props.navigation.getParam("title");
    getDecks().then(decks => {
      this.setState({
        decks
      });
    });
    const { bounceValue } = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
    ]).start();
  };

  render() {
    const { decks, bounceValue } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <NavigationEvents onDidFocus={this.onDidFocus} />

        {decks === null || Object.keys(decks).length === 0 ? (
          <Animated.Text
            style={[styles.direction, { transform: [{ scale: bounceValue }] }]}
          >
            Feel Free to create new DECK and start learning!
          </Animated.Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {Object.keys(decks).map(key => (
              <DeckListItem
                key={key}
                deck={this.state.decks[key]}
                onPress={this.handleOnPress}
              />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

DeckListScreen.navigationOptions = {
  title: "Decks"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  scrollView: {
    paddingTop: 10,
    backgroundColor: "white",
  },
  direction: {
    color: Colors.lightPurp,
    fontSize: 30,
    textAlign: "center"
  }
});
