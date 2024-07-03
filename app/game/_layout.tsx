import { Slot } from "expo-router";
import { SafeAreaView } from "react-native"
import Styles from "@/components/game/Styles";

export default function GameLayout() {
    return (
        <SafeAreaView style={Styles.body}>
            <Slot/>
        </SafeAreaView>
    )
}
