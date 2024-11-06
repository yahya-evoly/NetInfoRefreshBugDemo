import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { useState, useEffect } from "react";
import { Button } from "react-native";
// Configure NetInfo
NetInfo.configure({
  reachabilityUrl: "https://example.com/fail", // Use a URL that can fail
  reachabilityLongTimeout: 30 * 1000, // 30s
  reachabilityShortTimeout: 30 * 1000, // 30s
  reachabilityRequestTimeout: 1 * 1000, // 1s
  useNativeReachability: false,
  reachabilityMethod: "GET",
});

export default function App() {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(!!state.isInternetReachable);
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          is Internet Reachable:{" "}
          <Text
            style={[
              styles.statusValue,
              isOnline ? styles.online : styles.offline,
            ]}
          >
            {isOnline ? "Yes" : "No"}
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="NetInfo.refresh()"
          onPress={() => NetInfo.refresh()}
          color="#2196F3"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  statusContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: "500",
  },
  statusValue: {
    fontWeight: "bold",
  },
  online: {
    color: "#4CAF50",
  },
  offline: {
    color: "#f44336",
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
    maxWidth: 300,
  },
});
