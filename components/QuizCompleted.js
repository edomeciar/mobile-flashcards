import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import Colors from "../constants/Colors";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

export default class QuizCompleted extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  calculateResults = (total, value) => {
    return ((value / total) * 100).toFixed(2);
  };

  handleRestart = () => {
    this.props.handleRestartQuiz();
  };

  handleBack = () => {
    this.props.handleBack();
  };

  render() {
    const { title, ok, fail } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Quiz Completed!</Text>
        <Text style={styles.normal}>{`Results: ${title}`}</Text>
        <Text style={styles.correct}>{`OK: ${ok}`}</Text>
        <Text style={styles.incorrect}>{`Fail: ${fail}`}</Text>
        <Text style={styles.normal}>
          {`Success rate: ${this.calculateResults(ok + fail, ok)}%`}
        </Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios"
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={this.handleRestart}
        >
          <Text style={styles.submitBtnText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            Platform.OS === "ios"
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={this.handleBack}
        >
          <Text style={styles.submitBtnText}>Back To Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 24
  },
  normal: {
    fontSize: 18,
    fontWeight: "bold"
  },
  correct: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.green
  },
  incorrect: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.red
  },
  iosSubmitBtn: {
    borderColor: Colors.tabIconDefault,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 7,
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
    borderRadius: 2,
    marginTop: 20
  },
  submitBtnText: {
    color: Colors.tabIconSelected,
    fontSize: 22,
    textAlign: "center"
  }
});
