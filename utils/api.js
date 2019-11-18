import { AsyncStorage } from "react-native";
import { FLASHCARD_KEY } from "_flashCard";

export function getDecks() {
  // return all of the decks along with their titles, questions, and answers.
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results =>
    JSON.parse(results)
  );
}

export function getDeck(id) {
  // take in a single id argument and return the deck associated with that id.
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    const data = JSON.parse(results);
    return data[id];
  });
}

export function removeDeck(id) {
  // take in a single id argument and remove the deck associated with that id
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    let data = JSON.parse(results);
    data[id] = undefined;
    delete data[id];
    AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data));
  });
}

export function saveDeckTitle(title) {
  //  take in a single title argument and add it to the decks.
  return AsyncStorage.mergeItem(
    FLASHCARD_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  );
}

export function addCardToDeck(title, card) {
  // take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    let data = JSON.parse(results);
    const { question, answer } = card;
    data[title].questions.push({ question, answer });
    AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data));
  });
}
