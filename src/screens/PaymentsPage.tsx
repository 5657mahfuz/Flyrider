import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function PaymentsPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Payment Details</Text>
        <MaterialIcons name="payment" size={24} color="black" />
      </View>

      {/* Payment Summary */}
      <View style={styles.paymentSummary}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.paymentText}>Amount Due: 264.50 Tk</Text>
        <Text style={styles.paymentMethod}>Payment Method: Cash</Text>
      </View>

      {/* Confirmation Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate("Deliveries")} // Navigate to a different page, e.g., HomePage
      >
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
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
    marginBottom: 20
  },
  title: { fontSize: 24, fontWeight: "bold" },

  /* Payment Summary */
  paymentSummary: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  paymentText: { fontSize: 22, fontWeight: "bold" },
  paymentMethod: { fontSize: 16, color: "#777", marginTop: 5 },

  /* Confirmation Button */
  confirmButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  confirmButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});
