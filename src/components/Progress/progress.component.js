import { View, Text } from "react-native";
import styles from "./progress.styles";
const Progress = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.hg} />
      </View>
    </View>
  );
};

export default Progress;
