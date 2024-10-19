import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function PickUpPage() {
  const route = useRoute();
  const navigation = useNavigation();

  // Get the passed data from DeliveryDetailPage
  const { userLocation, destination, userCoordinates, destinationCoordinates } =
    route.params;

  // State for popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to navigate to DropOffPage
  const handleDropOff = () => {
    navigation.navigate("DropOffPage", {
      userLocation,
      destination,
      userCoordinates,
      destinationCoordinates
    });
  };

  // Function to handle phone icon press
  const handlePhonePress = () => {
    setShowPopup(true);
    Alert.alert("Calling...", "Dialing 01521514957", [{ text: "OK" }]);
    Linking.openURL("tel:01521514957");

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Show for 3 seconds
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="headset-mic" size={24} color="black" />
        <TouchableOpacity onPress={handlePhonePress} style={styles.callButton}>
          <MaterialIcons name="phone" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Vendor Details */}
      <View style={styles.vendorDetails}>
        <View style={styles.vendorTopRow}>
          <Text style={styles.vendorName}>{userLocation}</Text>
        </View>
        
        <View style={styles.locationRow}>
          <MaterialIcons name="location-on" size={24} color="red" />
          <Text style={styles.destinationText}>{destination}</Text>
        </View>

        <Text style={styles.instructionText}>
          Wait until your friends have added their items to the group order
          cart, and the ready icon has appeared by their names.
        </Text>
      </View>

      {/* ETA and Map */}
      <View style={styles.mapContainer}>
        <Text style={styles.arrivalText}>Arrive at 23:13</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userCoordinates.latitude,
            longitude: userCoordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker coordinate={userCoordinates} title="User Location" />
          <Marker coordinate={destinationCoordinates} title="Destination" />

          {/* Dotted Line between User Location and Destination */}
          <Polyline
            coordinates={[userCoordinates, destinationCoordinates]}
            strokeColor="#333" // Color of the line
            strokeWidth={2} // Width of the line
            lineDashPattern={[10, 5]} // Pattern for the dotted line
          />
        </MapView>
      </View>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.arrivedButton} onPress={handleDropOff}>
        <Text style={styles.arrivedButtonText}>Confirm Pick Up</Text>
      </TouchableOpacity>

      {/* Popup for phone call */}
      {showPopup && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Calling 01521514957...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  vendorDetails: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },
  vendorTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  dottedLine: {
    position: "absolute",
    left: "50%", // Center the dotted line
    top: "25%", // Adjust top position as needed
    width: 1,
    height: "50%",
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#333"
  },
  vendorName: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "green",
    color: "white",
    padding: 5,
    borderRadius: 5,
    marginLeft: 20
  },
  callButton: {
    marginLeft: 10
  },
  locationRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  destinationText: { fontSize: 18, marginLeft: 10 },
  instructionText: { fontSize: 16, color: "#777" },
  mapContainer: { marginTop: 20 },
  arrivalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  map: { width: "100%", height: 200, borderRadius: 10, marginBottom: 20 },
  arrivedButton: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  arrivedButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  popup: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 15,
    borderRadius: 10
  },
  popupText: { color: "white", fontSize: 18, textAlign: "center" },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});
