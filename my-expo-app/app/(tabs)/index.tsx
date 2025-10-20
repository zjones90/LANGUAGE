import { useState } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <View style={{ padding: 40 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
          ✅ Expo Go Test (Tabs Layout)
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 12 }}>
          You’ve tapped {count} times
        </Text>

        <Button title="Tap me" onPress={() => setCount(c => c + 1)} />
      </View>
    </SafeAreaView>
  );
}