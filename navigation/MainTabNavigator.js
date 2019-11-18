import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AddDeckScreen from "../screens/AddDeckScreen";
import DecksListScreen from "../screens/DecksListScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});
const DecksStack = createStackNavigator(
  {
    Decks: DecksListScreen
  },
  config
);

DecksStack.navigationOptions = {
  tabBarLabel: "Decks A",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  )
};

DecksStack.path = "";

const AddDeckStack = createStackNavigator(
  {
    AddDeck: AddDeckScreen
  },
  config
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
  DecksStack,
  AddDeckStack
});

tabNavigator.path = "";

export default tabNavigator;
