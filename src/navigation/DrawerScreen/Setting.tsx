import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { CheckBox, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => setIsChecked((previousState) => !previousState);

  const [isHeatMapChecked, setIsHeatMapChecked] = useState(false);
  const toggleHeatMapCheck = () =>
    setIsHeatMapChecked((previousState) => !previousState);

  const [is24HourFormat, setIs24HourFormat] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleTimeFormat = () =>
    setIs24HourFormat((previousState) => !previousState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: !is24HourFormat
    };
    return date.toLocaleTimeString(undefined, options);
  };

  const formatDate = (date) => {
    return date.toDateString();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Portion */}
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack("RootScreen")}
          >
            <Icon name="arrow-left" size={25} color="#72C914" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: "Settings",
          style: styles.headerText
        }}
        backgroundColor="white"
      />

      {/* Time Section */}
      <View style={styles.section}>
        <Text style={styles.header2}>Your preferences</Text>
        <TouchableOpacity>
          <View style={styles.itemsRow}>
            <View style={styles.textContainer}>
              <Text style={styles.header5}>Time</Text>
              <Text style={styles.header6}>{formatDate(currentTime)}</Text>
              <Text style={styles.header6}>{formatTime(currentTime)}</Text>
            </View>
            <View style={styles.toggleContainer}>
              <Switch
                trackColor={{ false: "#767577", true: "#72C914" }}
                onValueChange={toggleTimeFormat}
                value={is24HourFormat}
              />
              <Text style={styles.header6}>
                {is24HourFormat ? "24-Hour" : "12-Hour"}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Rest of the Sections */}
      <TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.header5}>Preferred Chat Language</Text>
          <Text style={styles.header6}>Bangla</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.itemsRow}>
        <Text style={styles.header2}>Map preferences</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#72C914" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styles.section}>
        <TouchableOpacity>
          <Text style={styles.header5}>Enable Map</Text>
          <Text style={styles.header6}>
            Offline mode is not configured. Additional data usage will occur.
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.itemsRow}>
          <View style={styles.textContainer}>
            <Text style={styles.header5}>Mapbox Metrics</Text>
            <Text style={styles.header6}>
              Enabling Mapbox Metrics will allow the rider app to send anonymous
              location info to Mapbox and will be used to improve map and
              routing information.
            </Text>
          </View>
          <CheckBox
            checked={isChecked}
            onPress={toggleCheck}
            checkedColor="#72C914"
          />
        </View>

        <View style={styles.itemsRow}>
          <Text style={styles.header5}>Heat Map</Text>
          <CheckBox
            checked={isHeatMapChecked}
            onPress={toggleHeatMapCheck}
            checkedColor="#72C914"
          />
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity>
          <Text style={styles.header2}>Miscellaneous</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.header5}>Troubleshoot notification</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.header5}>System Settings</Text>
        <Text style={styles.header6}>
          Rider App settings for storage, notification, and data usage.
        </Text>
        <View style={styles.header554}>
          <Text style={styles.header55}>Version</Text>
          <Text style={styles.header6}>v4.2221.1</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  headerContainer: {
    borderBottomWidth: 0
  },
  backButton: {
    padding: 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  section: {
    marginBottom: 20,
    padding: 10
  },
  itemsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9"
  },
  textContainer: {
    flex: 1,
    paddingRight: 10
  },
  toggleContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  header2: {
    fontSize: 18,
    color: "#72C914",
    marginBottom: 10
  },
  header5: {
    fontSize: 18,
    color: "black",
    marginBottom: 5
  },
  header6: {
    fontSize: 14,
    color: "#555",
    borderRadius: 20
  },
  header554: {
    marginTop: 20,

    color: "black"
  },
  header55: {
    fontSize: 18,
    marginTop: 20,
    color: "black"
  }
});