import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"; // Import useNavigation
import React, { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Ionicons"; // Assuming react-native-vector-icons is used
import { RootStackParamList } from "../navigation/StackNavigator";

type UpcomingShiftRouteProp = RouteProp<RootStackParamList, "UpcomingShift">;

const UpcomingShiftPage: React.FC = () => {
  const route = useRoute<UpcomingShiftRouteProp>();
  const { shift } = route.params;
  
  // Get navigation object
  const navigation = useNavigation(); 

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState<string>("Walker"); // Default vehicle
  const [selectedBag, setSelectedBag] = useState<string>("Standard Box"); // Default bag
  const [bagTemperature, setBagTemperature] = useState<string>(""); // Input for bag temperature

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onChange = (selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleStartShift = () => {
    Alert.alert(
      "Start Shift",
      "Are you sure you want to start this shift?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            // Check if route.params.onShiftStart is defined
            if (route.params && route.params.onShiftStart) {
              route.params.onShiftStart(shift);
            }

            // Navigate back to the previous screen
            navigation.goBack();
          },
        },
      ]
    );
  };


  // List of vehicle options
  const vehicleOptions = [
    { label: "Walker", icon: "walk-outline" },
    { label: "Bike", icon: "bicycle-outline" },
    { label: "Truck", icon: "bus-outline" },
  ];

  // List of bag options
  const bagOptions = [
    { label: "Standard Box", icon: "briefcase-outline" },
    { label: "Insulated Bag", icon: "cube-outline" },
    { label: "Personal Bag", icon: "bag-handle-outline" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Shift Details Widget */}
      <ReusableWidget
        title="Shift Details"
        shift={shift}
        date={date}
        isShiftDetails={true}
      />

      {/* Vehicle Type Widget */}
      <ReusableWidget
        title="Vehicle Type"
        options={vehicleOptions}
        selectedOption={selectedVehicle}
        onSelect={setSelectedVehicle}
      />

      {/* Bag Type Widget */}
      <ReusableWidget
        title="Bag Type"
        options={bagOptions}
        selectedOption={selectedBag}
        onSelect={setSelectedBag}
        bagTemperature={bagTemperature} // Pass the bagTemperature state
        onTemperatureChange={setBagTemperature} // Pass the setter function
        showTemperatureInput={true} // Add a prop to show the temperature input
      />

      {/* Start Shift Button */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartShift}>
        <Text style={styles.startButtonText}>Start Shift Now</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </ScrollView>
  );
};

// Reusable Widget Component
const ReusableWidget = ({
  title,
  options,
  selectedOption,
  onSelect,
  shift,
  date,
  isShiftDetails = false,
  bagTemperature,
  onTemperatureChange,
  showTemperatureInput = false, // New prop to control the input visibility
}: {
  title: string;
  options?: Array<{ label: string; icon: string }>;
  selectedOption?: string;
  onSelect?: (label: string) => void;
  shift?: any;
  date?: Date;
  isShiftDetails?: boolean;
  bagTemperature?: string;
  onTemperatureChange?: (temp: string) => void;
  showTemperatureInput?: boolean;
}) => {
  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {/* If it is the Shift Details Widget */}
      {isShiftDetails ? (
        <View style={styles.shiftDetails}>
          <View style={styles.shiftDate}>
            <Text style={styles.date}>
              {date?.toLocaleString("default", { month: "short" })}
            </Text>
            <Text style={styles.dateNumber}>{date?.getDate()}</Text>
            <Text style={styles.today}>Today</Text>
          </View>
          <View style={styles.shiftInfo}>
            <Text style={styles.shiftTime}>{shift.time}</Text>
            <Text style={styles.shiftLocation}>{shift.name}</Text>
          </View>
        </View>
      ) : (
        // For Selection (Vehicle or Bag)
        <View style={styles.selectionGrid}>
          {options?.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={[
                styles.gridItem,
                selectedOption === option.label && styles.selectedGridItem,
              ]}
              onPress={() => onSelect?.(option.label)}
            >
              <Icon
                name={option.icon}
                size={40}
                color={selectedOption === option.label ? "#00B34D" : "#666"}
              />
              <Text
                style={[
                  styles.gridItemText,
                  selectedOption === option.label && styles.selectedGridItemText,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Show temperature input if it's Bag Type Widget */}
          {showTemperatureInput && (
            <TextInput
              style={styles.temperatureInput}
              placeholder="Enter your bag temperature (°C)"
              keyboardType="numeric"
              value={bagTemperature}
              onChangeText={onTemperatureChange}
            />
          )}
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAECEE",
    paddingBottom: 20,
    marginTop: 10,
  },
  widgetContainer: {
    marginTop: 10,
    marginHorizontal: 17,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
  },
  shiftDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  shiftDate: {
    backgroundColor: "#ECF0F1",
    padding: 15,
    borderRadius: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 2,
  },
  dateNumber: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
  },
  today: {
    marginTop: 5,
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  shiftInfo: {
    marginVertical: 40,
    marginRight: 40,
  },
  shiftTime: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#72C914",
  },
  shiftLocation: {
    fontSize: 18,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  selectionGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  gridItem: {
    backgroundColor: "#ECF0F1",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  selectedGridItem: {
    borderColor: "#72C914",
    borderWidth: 2,
  },
  gridItemText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
  selectedGridItemText: {
    color: "#72C914",
  },
  temperatureInput: {
    marginTop: 20,
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  startButton: {
    backgroundColor: "#72C914",
    paddingVertical: 15,
    marginHorizontal: 17,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UpcomingShiftPage;
