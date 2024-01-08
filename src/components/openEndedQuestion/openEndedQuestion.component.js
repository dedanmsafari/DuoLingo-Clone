import { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./openEndedQuestion.styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button/button.component";

const OpenEndedQuestion = ({ question, correct, wrong }) => {
  const [input, setInput] = useState("");

  handlePress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      correct();
    } else {
      wrong();
    }
    setInput("");
  };
  return (
    <>
      <Text style={styles.title}>Translate this Sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.Image} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        onChangeText={setInput}
        textAlignVertical="top"
        multiline
        style={styles.textInput}
        placeholder="Translate to English"
      />
      <Button text="check" disabled={!input} onPress={handlePress} />
    </>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  correct: PropTypes.func.isRequired,
  wrong: PropTypes.func.isRequired,
};

export default OpenEndedQuestion;
