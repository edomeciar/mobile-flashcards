import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { getDeck } from "../utils/api";
import { NavigationEvents } from "react-navigation";
import Colors from "../constants/Colors";
import Question from "../components/Question";
import QuizCompleted from "../components/QuizCompleted";

export default class StartQuizScreen extends Component {
  state = {
    deck: null,
    ok: 0,
    fail: 0,
    currentQuestionIndex: 0,
    bounceValue: new Animated.Value(1)
  };

  onDidFocus = () => {
    title = this.props.navigation.getParam("title");
    getDeck(title).then(deck => {
      this.setState({ deck });
    });
  };

  handleAnswerOk = () => {
    this.setState(prevState => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      ok: prevState.ok + 1
    }));
  };

  handleAnswerFail = () => {
    this.setState(prevState => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      fail: prevState.fail + 1
    }));
  };

  handleRestartQuiz = () => {
    this.setState(prevState => ({
      ok: 0,
      fail: 0,
      currentQuestionIndex: 0
    }));
  };

  handleBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { deck, bounceValue, currentQuestionIndex, ok, fail } = this.state;
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={this.onDidFocus} />
        {deck !== null && (
          <View>
            {deck.questions.length === 0 ? (
              <Animated.Text
                style={[
                  styles.direction,
                  { transform: [{ scale: bounceValue }] }
                ]}
              >
                0 # of Cards! Add some questions
              </Animated.Text>
            ) : currentQuestionIndex === deck.questions.length ? (
              <QuizCompleted
                title={this.props.navigation.getParam("title")}
                ok={ok}
                fail={fail}
                handleRestartQuiz={this.handleRestartQuiz}
                handleBack={this.handleBack}
              />
            ) : (
              <Question
                currentQuestionNumber={currentQuestionIndex + 1}
                totalQuestions={deck.questions.length}
                question={deck.questions[currentQuestionIndex].question}
                answer={deck.questions[currentQuestionIndex].answer}
                handleAnswerOk={this.handleAnswerOk}
                handleAnswerFail={this.handleAnswerFail}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  warning: {
    fontSize: 24
  },
  direction: {
    color: Colors.lightPurp,
    fontSize: 30,
    textAlign: "center"
  }
});
