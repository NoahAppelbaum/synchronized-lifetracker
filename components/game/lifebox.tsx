import { useState } from "react";
import { View, Text } from "react-native";
import LifeAdjustPaddle from "./lifeadjustpaddle";
import styles from "./Styles";

export default function Lifebox({
  initLifeTotal = 20,
  user = true,
}: {
  initLifeTotal: number;
  user: boolean;
}) {
  const [lifeTotal, setLifeTotal] = useState<number>(initLifeTotal);

  // TODO: Or, (/should?) this can be done in useEffects w/ lifeTotal as dependency?
  function handleLifeAdjustment(adjustment: number): void {
    setLifeTotal((prev) => prev + adjustment);
  }
  //TODO: Pass container style obj. as prop, for player vs. remotes
  return (
    <View style={styles.lifeBox}>
      {!!user && (
        <LifeAdjustPaddle
          handleLifeAdjustment={handleLifeAdjustment}
          operator="-"
          value={-1}
        />
      )}
      <Text style={styles.lifeTotal}>{lifeTotal}</Text>
      {!!user && (
        <LifeAdjustPaddle
          handleLifeAdjustment={handleLifeAdjustment}
          operator="+"
          value={1}
        />
      )}
    </View>
  );
}
