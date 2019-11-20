import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import Colors from "../constants/Colors";
import { saveDeckTitle } from "../utils/api";

export default class AddDeckScreen extends Component {
  state = {
    value: ""
  };
  handleChangeText = text => {
    this.setState({
      value: text
    });
  };

  handleOnPress = () => {
    const title = this.state.value;
    saveDeckTitle(title);

    this.props.navigation.navigate("Details", { title: title });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deck Title:</Text>
        <TextInput
          onChangeText={this.handleChangeText}
          value={this.state.value}
          style={styles.input}
        />
        <TouchableOpacity
          style={
            Platform.OS === "ios"
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={this.handleOnPress}
        >
          <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddDeckScreen.navigationOptions = {
  title: "Add New Deck"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20
  },
  input: {
    width: 300,
    fontSize: 30,
    borderColor: Colors.tabIconDefault,
    backgroundColor: Colors.white,
    borderRadius: 7,
    borderWidth: 1
  },
  iosSubmitBtn: {
    borderColor: Colors.tabIconDefault,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20
  },
  AndroidSubmitBtn: {
    borderColor: Colors.tabIconDefault,
    backgroundColor: Colors.white,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    marginTop: 20
  },
  submitBtnText: {
    color: Colors.tabIconSelected,
    fontSize: 22,
    textAlign: "center"
  }
});
