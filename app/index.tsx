import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Placeholder landing screen so `npx expo start` renders something on
 * first boot. This will be replaced by the Locked → Decoy → Unlocked
 * auth flow (SPEC.md §2.1) before the module screens land.
 */
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="font-heading text-4xl text-plum">Daily Planner</Text>
        <Text className="mt-3 text-center font-body text-base text-plum-700">
          Tap anywhere to get started.
        </Text>
      </View>
    </SafeAreaView>
  );
}
