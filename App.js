// Import necessary dependencies
import { StyleSheet, Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { useState, useEffect } from "react";
import { Button } from "react-native";

// Configure NetInfo with specific settings to demonstrate the issue
NetInfo.configure({
  reachabilityUrl: "https://example.com/fail", // Intentionally using a failing URL
  reachabilityLongTimeout: 30 * 1000, // How often to check when app is in foreground
  reachabilityShortTimeout: 30 * 1000, // How often to check when app is in background
  reachabilityRequestTimeout: 1 * 1000, // How long to wait for each check
  useNativeReachability: false, // Using custom implementation instead of native
  reachabilityMethod: "GET", // HTTP method for reachability checks
});

export default function App() {
  // Track online status using state
  const [isOnline, setIsOnline] = useState(false);

  // Set up NetInfo listener to monitor internet connectivity
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(!!state.isInternetReachable);
    });
    // Clean up listener when component unmounts
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* Display current connection status */}
      <Text>
        is Internet Reachable:{" "}
        <Text
          style={{
            color: isOnline ? "green" : "red",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {isOnline ? "Yes" : "No"}
        </Text>
      </Text>
      {/* Manual refresh button for testing */}
      <Button title="NetInfo.refresh()" onPress={() => NetInfo.refresh()} />
    </View>
  );
}

// Styles for layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
