import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import { gray, purple, white } from "../constants/Colors";
// import { saveDeckTitle } from "../utils/api";

export default function AddDeckScreen() {
  state = {
    value: ""
  };
  handleTextChange = text => {
    this.setState({
      value: text
    });
  };

  handleOnPress = () => {
    const title = this.state.value;
    console.log("save deck");
    // saveDeckTitle(title);

    this.props.navigation.navigate("Details", { title: title });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addDeckTitle}>
        What is the title of your new deck?
      </Text>
      <TextInput
        onChangeText={this.handleChangeText}
        value={this.state.value}
        style={styles.input}
      />
      <TouchableOpacity
        style={
          Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
        }
        onPress={this.handleOnPress}
      >
        <Text style={styles.submitBtnText}>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

AddDeckScreen.navigationOptions = {
  title: "Add Deck"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  addDeckTitle: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    width: 300,
    borderColor: gray,
    borderWidth: 1
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});
