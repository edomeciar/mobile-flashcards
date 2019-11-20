import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import Colors from "../constants/Colors";

export default class Question extends Component {
  state = {
    isVisibleAnswer: false
  };

  handleViewAnswer = () => {
    this.setState({
      isVisibleAnswer: true
    });
  };

  handleAnswerOk = () => {
    this.setState({
      isVisibleAnswer: false
    });
    this.props.handleAnswerOk();
  };

  handleAnswerFail = () => {
    this.setState({
      isVisibleAnswer: false
    });
    this.props.handleAnswerFail();
  };

  render() {
      const {currentQuestionNumber,totalQuestions, question, answer, isVisibleAnswer} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text>
            Question {currentQuestionNumber} of{" "}
            {totalQuestions}
          </Text>
          <Text style={styles.question}>{question}</Text>
          {isVisibleAnswer && (
            <Text style={styles.answer}>{answer}</Text>
          )}
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            style={
              Platform.OS === "ios"
                ? styles.iosSubmitBtn
                : styles.AndroidSubmitBtn
            }
            onPress={this.handleViewAnswer}
          >
            <Text style={styles.submitBtnText}>View Answer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              Platform.OS === "ios"
                ? styles.iosSubmitBtn
                : styles.AndroidSubmitBtn
            }
            onPress={this.handleAnswerOk}
          >
            <Text style={[styles.submitBtnText, { color: Colors.green }]}>
              OK
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              Platform.OS === "ios"
                ? styles.iosSubmitBtn
                : styles.AndroidSubmitBtn
            }
            onPress={this.handleAnswerFail}
          >
            <Text style={[styles.submitBtnText, { color: Colors.red }]}>
              FAIL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  warning: {
    fontSize: 24
  },
  question: {
    fontSize: 24
  },
  answer: {
    fontSize: 30,
    padding: 10,
    borderRadius: 7,
    color: Colors.noticeText,
    backgroundColor: Colors.noticeBackground,
  },
  info: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  actions: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
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
