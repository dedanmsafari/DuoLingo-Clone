import { View, Image, Text } from "react-native";
import styles from "./header.styles";
import Progress from "../Progress/progress.component";
import Heart from "../../../assets/images/heart.png";
const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <Progress progress={progress} />
      <Image source={Heart} resizeMode="contain" style={styles.Icon} />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};
export default Header;
