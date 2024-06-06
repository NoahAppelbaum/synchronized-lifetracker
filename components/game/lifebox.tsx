import { useState } from "react";
import { View, Text } from "react-native";

export default function Lifebox({initLifeTotal}: {initLifeTotal: number;}) {
    const [lifeTotal, setLifeTotal] = useState<number>(initLifeTotal);

    return (
      <View>
        <Text>{lifeTotal}</Text>
      </View>
    );
}
