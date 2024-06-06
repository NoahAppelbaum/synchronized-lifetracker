import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Tracker() {
    const {room} = useLocalSearchParams<{room: string}>()
    return (
        <View>
            <Text>You are now in room {room}</Text>
        </View>
    )
}


// TODO: Make room code in corner shareable
