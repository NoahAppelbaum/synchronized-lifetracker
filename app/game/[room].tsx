import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Lifebox from "@/components/game/Lifebox";

export default function Game() {
    const {room} = useLocalSearchParams<{room: string}>()
    return (
        <View>
            {/* TODO: Make starting life total adjustable */}
            <Lifebox initLifeTotal={20} user={true}/>
            <Text>You are now in room {room}</Text>
        </View>
    )
}


// TODO: Make room code in corner shareable
