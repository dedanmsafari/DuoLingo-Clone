import { useState } from "react";
import { Text, View, Alert } from "react-native";
import ImageOption from "../ImageOptions/ImageOptions.component";
import PropTypes from "prop-types";
import Button from "../Button/button.component";

import styles from "./multipleImageQuestions.styles";

const MultipleImageQuestions = ({ question, correct, wrong }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  handlePress = () => {
    if (selectedOption.correct) {
      correct();
      setSelectedOption(null);
    } else {
      wrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            url={option.image}
            text={option.text}
            isSelected={selectedOption?.id === option.id}
            onPress={() => setSelectedOption(option)}
          />
        ))}
      </View>
      <Button text="check" disabled={!selectedOption} onPress={handlePress} />
    </>
  );
};

MultipleImageQuestions.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
  correct: PropTypes.func.isRequired,
  wrong: PropTypes.func.isRequired,
};

export default MultipleImageQuestions;
