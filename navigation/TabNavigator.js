import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import TabBarIcon from "../components/TabBarIcon";
import AddDeckScreen from "../screens/AddDeckScreen";
import DeckListScreen from "../screens/DeckListScreen";
import DeckDetailsScreen from "../screens/DeckDetailsScreen";
import AddCardScreen from "../screens/AddCardScreen";
import StartQuizScreen from "../screens/StartQuizScreen";

const DeckListStack = createStackNavigator(
  {
    Home: DeckListScreen,
    Details: DeckDetailsScreen,
    AddCard: AddCardScreen,
    StartQuiz: StartQuizScreen
  },
  {
    initialRouteName: "Home"
  }
);

DeckListStack.navigationOptions = {
  tabBarLabel: "Decks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  )
};

DeckListStack.path = "";

const AddDeckStack = createStackNavigator(
  {
    Home: AddDeckScreen,
    Details: DeckDetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

AddDeckStack.navigationOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add" : "md-add"}
    />
  )
};

AddDeckStack.path = "";

const tabNavigator = createBottomTabNavigator({
  DeckListStack,
  AddDeckStack
});

tabNavigator.path = "";

export default tabNavigator;
