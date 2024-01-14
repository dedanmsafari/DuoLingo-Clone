import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./completeMultipleParts.styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button/button.component";
import WordOption from "../WordOptions/wordOption.component";

const CompleteMultiplePart = ({ question, wrong, correct }) => {
  const [parts, setParts] = useState(question.parts);

  const handleButtonPress = () => {
    checkCorrect =
      parts.filter((part) => part.isBlank && part.selected === part.text)
        .length === 2;
    if (checkCorrect) {
      correct();
    } else {
      wrong();
      const newParts = [...parts];
      newParts.forEach((part) => {
        if (part.isBlank && part.selected) {
          return (part.selected = null);
        }
      });
      setParts(newParts);
    }
  };

  const removeSelectedAt = (index) => {
    const newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts);
  };

  const addOptionToSelected = (option) => {
    if (isSelected(option)) {
      return;
    }

    const newParts = [...parts];
    for (let i = 0; i < newParts.length; i++) {
      if (newParts[i].isBlank && !newParts[i].selected) {
        newParts[i].selected = option;
        break;
      }
    }
    setParts(newParts);
  };

  const isReadyToCheck = () => {
    return parts.filter((part) => part.isBlank && !part.selected).length > 0;
  };

  const isSelected = (option) => {
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    );
  };

  return (
    <>
      <Text style={styles.title}>Fill in the Blanks</Text>
      <Image style={styles.image} source={mascot} resizeMode="contain" />

      {/* SentenseContainer */}
      <View style={styles.sentenceContainer}>
        {parts.map((part, index) => {
          {
            return !part.isBlank ? (
              <View style={styles.textContainer} key={index}>
                <Text style={styles.text} key={index}>
                  {part.text}
                </Text>
              </View>
            ) : (
              <View style={styles.answerContainer}>
                {part.selected && (
                  <WordOption
                    option={part.selected}
                    onPress={() => removeSelectedAt(index)}
                  />
                )}
              </View>
            );
          }
        })}
      </View>
      {/* SelectionContainer */}
      <View style={styles.selectionContainer}>
        {question.options.map((option) => (
          <WordOption
            key={option.id}
            option={option}
            onPress={() => addOptionToSelected(option)}
            isSelected={isSelected(option)}
          />
        ))}
      </View>
      <Button
        text="check"
        disabled={isReadyToCheck()}
        onPress={handleButtonPress}
      />
    </>
  );
};

export default CompleteMultiplePart;
