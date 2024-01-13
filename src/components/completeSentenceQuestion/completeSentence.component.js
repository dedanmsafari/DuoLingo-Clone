import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./completeSentence.styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button/button.component";
import WordOption from "../WordOptions/wordOption.component";

const CompleteSentenceQuestion = ({ question, wrong, correct }) => {
  const [selected, setSelected] = useState(null);

  const handlePress = () => {
    if (selected === question.answer) {
      correct();
      setSelected(null);
    } else {
      wrong();
      setSelected(null);
    }
  };
  return (
    <>
      <Text style={styles.title}>Complete the Sentence</Text>
      <Image style={styles.image} source={mascot} resizeMode="contain" />

      {/* SentenseContainer */}
      <View style={styles.sentenceContainer}>
        {question.text.map((q, index) => (
          <View style={styles.textContainer} key={index}>
            <Text style={styles.text} key={index}>
              {q}
            </Text>
          </View>
        ))}
        <View style={styles.answerContainer}>
          {selected && (
            <WordOption
              option={selected}
              noMargin
              onPress={() => setSelected(null)}
            />
          )}
        </View>
      </View>
      {/* SelectionContainer */}
      <View style={styles.selectionContainer}>
        {question.options.map((option) => (
          <WordOption
            key={option.id}
            option={option}
            onPress={() => setSelected(option)}
            isSelected={option === selected}
          />
        ))}
      </View>
      <Button text="check" disabled={!selected} onPress={handlePress} />
    </>
  );
};

export default CompleteSentenceQuestion;
