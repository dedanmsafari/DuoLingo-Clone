import { StyleSheet } from "react-native";

export default StyleSheet.create({
  optionContainer: {
    padding: 20,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
    borderColor: "lightgrey",
    width: "48%",
    height: "48%",
    alignItems: "center",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  selectedContainer: {
    backgroundColor: "#ddf4f4",
    borderColor: "#81d5fe",
  },
  selectedText: {
    fontWeight: "bold",
    color: "#40bef7",
  },
  optionText: {
    fontWeight: "bold",
  },
});
