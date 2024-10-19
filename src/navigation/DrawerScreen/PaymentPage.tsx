import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PaymentPage: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");

  // Get the balance from route params
  const balance = route.params?.balance ?? 0;

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    navigation.navigate("Payment Details", {
      option,
      amount: withdrawAmount, // Pass the withdrawal amount
      image:
        option === "Bkash"
          ? require("../img/Bkash-Customer-Care1.png")
          : require("../img/image-42525-1643965434.jpg")
    });
  };

  const handleWithdrawAmountChange = (amount: string) => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount < 0) {
      setWithdrawAmount("");
      return;
    }
    if (numericAmount > balance) {
      Alert.alert(
        "Error",
        "Withdrawal amount cannot exceed the available balance."
      );
      return;
    }
    setWithdrawAmount(amount);
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={25} color="#72C914" />
          </TouchableOpacity>
        }
        centerComponent={{ text: "Balance", style: styles.headerText }}
        backgroundColor="white" // Corrected this line
      />

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>
          <Text style={styles.label}>Balance In Account: </Text>৳{" "}
          <Text style={styles.value}>{balance.toFixed(2)}</Text>
        </Text>

        <View style={styles.withdrawContainer}>
          <Text style={styles.withdrawText}>
            <Text style={styles.label}>Balance Withdraw: </Text>৳{" "}
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={withdrawAmount}
            onChangeText={handleWithdrawAmountChange}
            placeholder="Enter amount"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      <View style={styles.paymentOptions}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === "Bkash" && styles.selectedOption
          ]}
          onPress={() => handleOptionPress("Bkash")}
        >
          <Image
            source={require("../img/Bkash-Customer-Care1.png")}
            style={styles.image}
          />
          <Text style={styles.optionText}>Bkash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === "Nagad" && styles.selectedOption
          ]}
          onPress={() => handleOptionPress("Nagad")}
        >
          <Image
            source={require("../img/image-42525-1643965434.jpg")}
            style={styles.image}
          />
          <Text style={styles.optionText}>Nagad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  headerContainer: {
    borderBottomWidth: 0,
    marginBottom: 100
  },
  backButton: {
    marginLeft: 16
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  imagepayments: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 20
  },
  balanceContainer: {
    marginBottom: 30
  },
  balanceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10
  },
  withdrawContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  withdrawText: {
    fontSize: 18,
    color: "#333"
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft: 10
  },
  paymentOptions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  option: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 10,
    backgroundColor: "#fff"
  },
  selectedOption: {
    borderColor: "#72C914"
  },
  image: {
    width: 120,
    height: 80,
    marginBottom: 10
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  label: {
    fontWeight: "bold"
  },
  value: {
    color: "black"
  }
});

export default PaymentPage;
