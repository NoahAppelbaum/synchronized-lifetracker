import { View, Text } from "react-native";
import Styles from "./Styles";

export default function LifeAdjustPaddle({
  handleLifeAdjustment,
  value,
  operator,
}: {
  handleLifeAdjustment: (adjustment: number) => void;
  value: number;
  operator: string;
}) {
  return (
    <View>
      <Text
        onPress={() => handleLifeAdjustment(value)}
        style={Styles.adjustPaddle}
      >
        {operator}
      </Text>
    </View>
  );
}
