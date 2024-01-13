import { Pressable, Text } from "react-native";
import styles from "./wordOption.styles";

const WordOption = ({ option, onPress, isSelected, noMargin }) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={[
          styles.selectionOptions,
          {
            backgroundColor: isSelected ? "lightgrey" : "white",
            marginRight: noMargin ? 0 : 20,
          },
        ]}
      >
        <Text
          style={[
            styles.textAnswer,
            { color: isSelected ? "lightgrey" : "black" },
          ]}
        >
          {option}
        </Text>
      </Pressable>
    </>
  );
};

export default WordOption;
