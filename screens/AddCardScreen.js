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
import { addCardToDeck } from "../utils/api";

export default class AddCardScreen extends Component {
  state = {
    question: "",
    answer: ""
  };
  handleChangeQuestionText = question => {
    this.setState({
      question: question
    });
  };
  handleChangeAnswerText = answer => {
    this.setState({
      answer: answer
    });
  };

  handleOnPress = () => {
    const title = this.props.navigation.getParam("title");
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };
    addCardToDeck(title, card);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>New Card</Text>
        <TextInput
          onChangeText={this.handleChangeQuestionText}
          value={this.state.question}
          style={styles.input}
        />
        <TextInput
          onChangeText={this.handleChangeAnswerText}
          value={this.state.answer}
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
          <Text style={styles.submitBtnText}>Create Question</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    borderWidth: 1,
    margin: 10
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
