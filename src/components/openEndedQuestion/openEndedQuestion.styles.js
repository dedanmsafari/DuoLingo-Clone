import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  Image: {
    width: "30%",
    aspectRatio: 3 / 4,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    alignSelf: "stretch",
    fontSize: 18,
    borderWidth: 1.5,
    borderColor: "lightgrey",
    backgroundColor: "#ebebeb",
    padding: 10,
    borderRadius: 10,
  },
});
