import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "react-native-elements";

const PaymentDetails: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { option, amount, image } = route.params as {
    option: string;
    amount: string;
    image: any; // Assuming image is a require() statement or an imported image
  };

  const [mobileNumber, setMobileNumber] = useState("");
  const [pin, setPin] = useState("");

  const handlePayment = () => {
    // Validate mobile number and PIN
    if (mobileNumber.length < 11) {
      Alert.alert(
        "Invalid Input",
        "Mobile number must be at least 11 digits long.",
        [{ text: "OK" }]
      );
      return;
    }

    if (pin.length !== 5) {
      Alert.alert("Invalid Input", "PIN must be exactly 5 characters long.", [
        { text: "OK" },
      ]);
      return;
    }

    Alert.alert(
      "Payment Confirmation",
      `You are withdrawing ৳${amount} from ${option} for the mobile number ${mobileNumber}.`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        centerComponent={{
          text: `${option} Payment`,
          style: styles.headerText,
        }}
        backgroundColor="white"
      />

      <Image source={image} style={styles.image} />

      <Text style={styles.description}>
        Enter your mobile number, amount, and PIN to proceed with the payment.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number ( 015*******)"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        value={amount}
        editable={false} // Make the amount input field read-only
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter PIN"
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        secureTextEntry={true} // Hides the input
        maxLength={5} // Limit PIN to 5 digits
      />

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Proceed with Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    fontSize: 18, // Increase font size
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paymentButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#72C914",
    borderRadius: 8,
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PaymentDetails;
