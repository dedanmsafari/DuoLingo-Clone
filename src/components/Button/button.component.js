import React from "react";
import { Text, Pressable } from "react-native";
import PropTypes from "prop-types";
import styles from "./button.styles";

const Button = ({ text, disabled, onPress }) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, disabled ? styles.disabled : {}]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
};
export default Button;
