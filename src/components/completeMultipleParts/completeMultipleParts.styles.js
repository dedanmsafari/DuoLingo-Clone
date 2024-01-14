import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  image: {
    height: "30%",
    margin: 30,
  },
  sentenceContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  textContainer: {
    paddingRight: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    borderBottomWidth: 3,
    borderColor: "grey",
    borderStyle: "dotted",
  },
  answerContainer: {
    borderBottomWidth: 2,
    borderColor: "grey",
    paddingBottom: 5,
    minWidth: 50,
    minHeight: 62,
  },

  selectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  selectionBackground: {
    backgroundColor: "gray",
  },
});
