import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Alert, ActivityIndicator } from "react-native";
import styles from "./App.styles";
import CompleteSentenceQuestion from "./src/components/completeSentenceQuestion/completeSentence.component";
import questions from "./assets/data/allQuestions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./src/components/Header/header.component";

export default function App() {
  const [lives, setLives] = useState(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      Alert.alert("You Reached the End !");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  correct = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  wrong = () => {
    if (lives <= 1) {
      Alert.alert("You Lost!", "Please Try Again", [
        { text: "Try Again", onPress: restart },
      ]);
      setCurrentQuestionIndex(0);
    } else {
      Alert.alert("Wrong XXX!");
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("lives", lives.toString());
      await AsyncStorage.setItem(
        "currentQuestionIndex",
        currentQuestionIndex.toString()
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const loadData = async () => {
    try {
      const loadedLives = await AsyncStorage.getItem("lives");
      const questionIndex = await AsyncStorage.getItem("currentQuestionIndex");
      console.log("loaded Lives", loadedLives);
      console.log("QuestionIndex", questionIndex);
      if (loadedLives) {
        setLives(parseInt(loadedLives));
      }
      if (questionIndex) {
        setCurrentQuestionIndex(parseInt(questionIndex));
      }
      setHasLoaded(true);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <MultipleImageQuestions
          question={currentQuestion}
          correct={correct}
          wrong={wrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          correct={correct}
          wrong={wrong}
        />
      )}
      {currentQuestion.type === "COMPLETE_SENTENCE" && (
        <CompleteSentenceQuestion
          question={currentQuestion}
          correct={correct}
          wrong={wrong}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}
