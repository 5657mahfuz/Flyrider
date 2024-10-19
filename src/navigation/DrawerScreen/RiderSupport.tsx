import { useNavigation } from "@react-navigation/native"; // Import navigation
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Simulate location data for the alert
const getLocation = () => {
  return "Lat: 23.7808875, Long: 90.2792371"; // Example coordinates
};

export default function App() {
  const navigation = useNavigation(); // Initialize navigation

  // Example image paths (replace with your actual local images)
  const images = [
    {
      source: require("../img/RiderSupport/Police.png"),
      caption: "Call Police",
      onPress: () => callEmergency("999", "Police") // Call Police with Location
    },
    {
      source: require("../img/RiderSupport/fireService.jpg"),
      caption: "Call Fire Service",
      onPress: () => callEmergency("999", "Fire Service")
    },
    {
      source: require("../img/RiderSupport/BRTA.png"),
      caption: "Call BRTA",
      onPress: () => callEmergency("999", "BRTA")
    },
    {
      source: require("../img/RiderSupport/Bike.jpg"),
      caption: "Call Mechanics",
      onPress: () => callEmergency("999", "Mechanics")
    }
  ];

  const callEmergency = (number, service) => {
    // Simulate location retrieval
    const location = getLocation();

    // Show a colorful alert with a message
    Alert.alert(
      `${service} Emergency Call`, // Title
      `Your current location (${location}) will be sent to the ${service} for emergency help.`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Call Now", onPress: () => console.log(`Dialing ${number}`) }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Status")} // Navigate to Status page
        >
          <Icon name="close" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Rider Support</Text>
      </View>

      {/* Centered Image Grid without Zoom-in effect */}
      <View style={styles.imageGrid}>
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              img.onPress(); // Call the function (999) with service-specific message
            }}
            activeOpacity={0.8}
          >
            <View style={styles.imageWrapper}>
              <Image source={img.source} style={styles.image} />
              <Text style={styles.caption}>{img.caption}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    backgroundColor: "#353942",
    marginTop: 40
  },
  backButton: {
    position: "absolute",
    left: 16
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  },
  imageGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping to two rows
    justifyContent: "center", // Center the images horizontally
    alignItems: "center" // Center the images vertically
  },
  imageWrapper: {
    marginTop: 70,
    margin: 10,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 8,
    padding: 5,
    alignItems: "center", // Centers images and captions
    width: 200, // Make images uniform in size
    height: 250 // Adjust height to fit caption
  },
  image: {
    width: 170,
    height: 200,
    resizeMode: "cover" // Ensures image covers the area
  },
  caption: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333"
  }
});
