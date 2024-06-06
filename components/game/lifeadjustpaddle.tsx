import { View, Text } from "react-native";

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
            <Text onPress={()=>handleLifeAdjustment(value)}>{operator}</Text>
        </View>
    )

}
