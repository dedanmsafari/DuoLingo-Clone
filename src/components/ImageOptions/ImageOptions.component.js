import { View, Image, Text, Pressable } from "react-native";
import styles from "./ImageOptions.styles";
import PropTypes from "prop-types";

const ImageOption = ({ url, text, isSelected, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
  >
    <Image
      source={{
        uri: url,
      }}
      style={styles.optionImage}
      resizeMode="contain"
    />
    <Text style={[styles.optionText, isSelected ? styles.selectedText : {}]}>
      {text}
    </Text>
  </Pressable>
);

ImageOption.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  text: "Lexical Information",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;
