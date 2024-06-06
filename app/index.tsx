import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Landing() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* TODO: Buttons with onPress router push */}
      <Link href={{ pathname: "/game/[room]", params: { room: "new" } }}>
        Start Game
      </Link>
      {/* TODO: dynamic "Join Game" form -> routing */}
      <Link href={{ pathname: "/game/[room]", params: { room: "HJKL" } }}>
        Join HJKL
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
