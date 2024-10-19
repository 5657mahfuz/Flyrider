import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Linking, Alert } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function DropOffPage() {
  const route = useRoute();
  const navigation = useNavigation();

  // Get the passed data from PickUpPage
  const { userLocation, destination } = route.params;

  // Function to handle phone call
  const handlePhoneCall = () => {
    const phoneNumber = '01300659136';
    Alert.alert(
      "Calling...",
      `Dialing ${phoneNumber}`,
      [{ text: "OK" }]
    );
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Drop-Off</Text>
        <TouchableOpacity onPress={handlePhoneCall}>
          <MaterialIcons name="phone" size={30} color="green" />
        </TouchableOpacity>
      </View>

      {/* Vendor Details */}
      <View style={styles.vendorDetails}>
        {/* User's Destination */}
        <View style={styles.vendorTopRow}>
          <MaterialIcons name="local-shipping" size={30} color="black" style={styles.icon} />
          <Text style={styles.vendorName}>{destination}</Text>
        </View>
        <Text style={styles.pickupTime}>Pickup at 23:13</Text>
      </View>

      {/* Order Details */}
      <View style={styles.orderDetails}>
        <Text style={styles.sectionTitle}>Order Details</Text>
        <Text style={styles.orderID}>Order: Woqv-vllh (#1909)</Text>
        <Text style={styles.itemCount}>2 Items</Text>
      </View>

      {/* Payment Details */}
      <View style={styles.paymentDetails}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <Text style={styles.paymentText}>Bkash</Text>
        <Text style={styles.amountText}>264.50 Tk</Text>
      </View>




      {/* Drop-Off Button */}
      <TouchableOpacity
        style={styles.dropOffButton}
        onPress={() => navigation.navigate("PaymentsPage")}
      >
        <Text style={styles.dropOffButtonText}>Drop-Off</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: 'center',
  },

  title: { fontSize: 24, fontWeight: "bold", textAlign: 'center', flex: 1, color: "black" },

  /* Vendor Details */
  vendorDetails: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },
  vendorTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  vendorName: { fontSize: 26, fontWeight: "bold", color: "black" }, // Increased size and color
  icon: { marginRight: 10 },
  pickupTime: { fontSize: 16, color: "#777" },

  /* Order Details */
  orderDetails: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  orderID: { fontSize: 16, marginBottom: 5 },
  itemCount: { fontSize: 16, marginBottom: 5 },

  /* Payment Details */
  paymentDetails: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20
  },
  paymentText: { fontSize: 16 },
  amountText: { fontSize: 22, fontWeight: "bold", marginTop: 5 },

  /* Drop-Off Button */
  dropOffButton: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  dropOffButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});
