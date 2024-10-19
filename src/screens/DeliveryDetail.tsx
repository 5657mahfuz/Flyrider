import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DeliveryDetailPage() {
  const route = useRoute();
  const navigation = useNavigation();

  // Fallback values in case route params are undefined
  const userLocation = route.params?.userLocation || "Pickup Location";
  const destination = route.params?.destination || "Drop Off Location";
  const userCoordinates = route.params?.userCoordinates || {
    latitude: 23.8103,
    longitude: 90.4125
  }; // Dhaka coordinates as fallback
  const destinationCoordinates = route.params?.destinationCoordinates || {
    latitude: 23.8223,
    longitude: 90.4285
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        centerComponent={{ text: "New Order", style: styles.headerText }}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.declineText}>Decline</Text>
          </TouchableOpacity>
        }
        backgroundColor="white"
      />

      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userCoordinates.latitude,
          longitude: userCoordinates.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        <Marker
          coordinate={userCoordinates}
          title={userLocation}
          description="Pickup Location"
        />
        <Marker
          coordinate={destinationCoordinates}
          title={destination}
          description="Drop Off Location"
        />
      </MapView>

      {/* Delivery Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Delivery Details</Text>

        {/* Pickup Row */}
        <View style={styles.detailRow}>
          <Icon name="car" size={24} color="#333" />
          <Text style={styles.detailTitle}>Pickup</Text>
          <Text>10 min</Text>
        </View>
        <View>
          <Text>{userLocation}</Text>
        </View>

        {/* Vertical Dotted Line */}
        <View style={styles.dottedLine} />

        {/* Drop Off Row */}
        <View style={styles.detailRow}>
          <Icon name="package-variant" size={24} color="#333" />
          <Text style={styles.detailTitle}>Drop Off</Text>
          <Text>6 min</Text>
        </View>
        <View>
          <Text>{destination}</Text>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.earnText}>You earn 45.35 Tk</Text>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() =>
            navigation.navigate("PickUpPage", {
              userLocation, // Passing data to the next page
              destination,
              userCoordinates,
              destinationCoordinates
            })
          }
        >
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  headerContainer: { borderBottomWidth: 0 },
  headerText: { fontWeight: "bold", fontSize: 20, color: "#333" },
  declineText: { color: "#FF6347", fontWeight: "bold" },
  map: { width: "100%", height: 300, padding: 50, marginTop: 20 },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10
  },
  sectionTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 10 },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5
  },
  detailTitle: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 18 // Increased font size
  },

  dottedLine: {
    width: 1,
    height: 150,
    backgroundColor: "transparent",
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#333",
    alignSelf: "center"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd"
  },
  earnText: { fontWeight: "bold", fontSize: 18, color: "#4CAF50" },
  acceptButton: { backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center" },
  acceptText: { color: "#fff", fontWeight: "bold" }
});
