import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Header } from "react-native-elements";

export default function App({ navigation }) {
  // Function to get the current week of the year
  const getCurrentWeek = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff =
      now -
      start +
      (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000;
    const oneWeek = 604800000; // 7 * 24 * 60 * 60 * 1000
    return Math.floor(diff / oneWeek) + 1;
  };

  // Function to format the date in DD.MM.YYYY format
  const formatDate = (date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  // Function to get the date range for the given week number
  const getWeekRange = (week) => {
    const start = new Date(new Date().getFullYear(), 0, 1);
    start.setDate(start.getDate() + (week - 1) * 7);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  // Function to generate a random balance
  const generateRandomBalance = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());
  const [weekRange, setWeekRange] = useState(getWeekRange(currentWeek));
  const [yearlyBalance, setYearlyBalance] = useState(generateRandomBalance());

  useEffect(() => {
    setWeekRange(getWeekRange(currentWeek));
  }, [currentWeek]);

  // Function to handle the reload button press
  const reloadPage = () => {
    Alert.alert("Page Refreshed", "Everything is refreshed!");
    setCurrentWeek(getCurrentWeek());
    setYearlyBalance(generateRandomBalance());
  };

  // Function to handle the previous week button press
  const previousWeek = () => {
    setCurrentWeek((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Function to handle the next week button press
  const nextWeek = () => {
    setCurrentWeek((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
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
        centerComponent={{ text: "Absences", style: styles.headerText }}
        backgroundColor="white"
      />

      {/* Section with Reload Button */}
      <View style={styles.sectionWithReload}>
        <View style={styles.nothingContainer}>
          <Text style={styles.nothing}></Text>
        </View>
        <TouchableOpacity style={styles.reloadButton} onPress={reloadPage}>
          <Icon name="reload" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Week and Date Navigation */}
      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.backButton} onPress={previousWeek}>
          <Icon name="chevron-left" size={50} color="white" />
        </TouchableOpacity>
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>Week {currentWeek}</Text>
          <Text style={styles.dateSubText}>{weekRange}</Text>
        </View>
        <TouchableOpacity style={styles.forwardButton} onPress={nextWeek}>
          <Icon name="chevron-right" size={50} color="white" />
        </TouchableOpacity>
      </View>

      {/* Yearly Balance Section */}
      <View style={styles.lightGrayContainer}>
        <Text style={styles.lightGrayText}>Yearly balance</Text>
        <Text style={styles.lightGrayText}>AVAILABLE BALANCE HOLIDAYS</Text>
        <Text style={styles.lightGrayText}>{yearlyBalance} days</Text>
      </View>

      {/* No Data Message */}
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No data</Text>
      </View>

      {/* Widget with Loupe Icon */}
      <TouchableOpacity style={styles.widget}>
        <Icon name="loupe" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  sectionWithReload: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#353A40",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  reloadButton: {
    position: "absolute",
    right: 16,
  },
  nothingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#4A4F55",
  },
  dateTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: "white",
  },
  dateSubText: {
    fontSize: 14,
    color: "white",
  },
  forwardButton: {
    position: "absolute",
    right: 16,
  },
  lightGrayContainer: {
    padding: 16,
    backgroundColor: "#55585D",
  },
  lightGrayText: {
    fontSize: 16,
    color: "white",
  },
  noDataContainer: {
    justifyContent: "center",
    padding: 20,
  },
  noDataText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  widget: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#597FAC",
    padding: 10,
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
