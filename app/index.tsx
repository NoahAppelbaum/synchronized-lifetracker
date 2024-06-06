import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Landing() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href={{ pathname: "/tracker/[room]", params: { room: "new" } }}>
        Start Game
      </Link>
      <Link href={{ pathname: "/tracker/[room]", params: { room: "HJKL" } }}>
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
