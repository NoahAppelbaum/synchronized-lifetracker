import { useState } from "react";
import { View, Text } from "react-native";
import LifeAdjustPaddle from "./lifeadjustpaddle";

export default function Lifebox({initLifeTotal}: {initLifeTotal: number;}) {
    const [lifeTotal, setLifeTotal] = useState<number>(initLifeTotal);

    // TODO: Or, (/should?) this can be done in useEffects w/ lifeTotal as dependency?
    function handleLifeAdjustment(adjustment: number): void {
        setLifeTotal(prev => prev + adjustment);
    }

    return (
      <View>
        <LifeAdjustPaddle handleLifeAdjustment={handleLifeAdjustment} operator="-" value={-1} />
        <Text>{lifeTotal}</Text>
        <LifeAdjustPaddle handleLifeAdjustment={handleLifeAdjustment} operator="+" value={1} />
      </View>
    );
}
