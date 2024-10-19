import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App({ navigation }) {
  const [shifts, setShifts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    generateShifts();
  }, []);

  const generateShifts = () => {
    const generatedShifts = [];

    for (let i = 0; i < 3; i++) {
      const randomShift = Math.floor(Math.random() * 3) + 1;
      generatedShifts.push(randomShift);
    }

    setShifts(generatedShifts);
  };

  const calculateTotalWeekHours = () => {
    const totalShifts = shifts.reduce((total, shift) => total + shift, 0);
    return totalShifts * 3; // 3 hours per shift
  };

  const getFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const reloadPage = () => {
    Alert.alert("Page Refreshed", "Everything is refreshed!");
    generateShifts();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowCalendar(false);
    setSelectedDate(currentDate);
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
        centerComponent={{ text: "My Shift", style: styles.headerText }}
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

      {/* Date and History Section */}
      <View style={styles.dateContainer}>
        <View style={styles.dateTextContainer}>
          <TouchableOpacity>
            <Text style={styles.dateText}>Picked Shift</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("History")}
          >
            <Text style={styles.dateSubText}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Date and Filter Section */}
      <View style={styles.lightGrayContainer}>
        <Text style={styles.lightGrayText}>{getFormattedDate(new Date())}</Text>

        <View style={styles.devide}>
          <Text style={styles.lightGrayTexts}>
            Week Hours: {calculateTotalWeekHours()} hours
          </Text>
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <Icon name="filter" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Shifts Section */}
      {shifts.map((shift, index) => (
        <View key={index}>
          <View style={styles.friday}>
            <Text style={styles.fridayText}>
              {getFormattedDate(
                new Date(new Date().setDate(new Date().getDate() - index))
              )}{" "}
              (Shifts: {shift})
            </Text>
          </View>
          <View style={styles.fridayShift}>
            <Text style={styles.fridayShiftText}>You have {shift} shifts</Text>
            <TouchableOpacity
              style={styles.takeShiftButton}
              onPress={() => navigation.navigate("AvailableShift")}
            >
              <Text style={styles.takeShiftButtonText}>Take Shift</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Calendar Modal */}
      {showCalendar && (
        <Modal transparent={true} animationType="slide">
          <View style={styles.calendarContainer}>
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
            <Button title="Close" onPress={() => setShowCalendar(false)} />
          </View>
        </Modal>
      )}
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
    backgroundColor: "white",
  },
  dateTextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "140%",
    padding: 5,
  },
  devide: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  dateText: {
    fontSize: 18,
    color: "#597FAC",
  },
  dateSubText: {
    fontSize: 16,
    color: "#858585",
  },
  lightGrayContainer: {
    padding: 16,
    backgroundColor: "#4A4F55",
  },
  lightGrayText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginLeft: 15,
  },
  lightGrayTexts: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
  friday: {
    padding: 15,
    backgroundColor: "lightgray",
  },
  fridayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  fridayShift: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  fridayShiftText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
  takeShiftButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#597FAC",
  },
  takeShiftButtonText: {
    color: "#597FAC",
    fontSize: 16,
    fontWeight: "bold",
  },
  calendarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
