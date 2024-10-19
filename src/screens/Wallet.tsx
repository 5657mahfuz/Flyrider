import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Header } from "react-native-elements";
import { DataPage } from "../navigation/Data/DataPage";

export default function App({ navigation }) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleDataFetched = (data) => {
    setTransactions(data);
  };

  const handleBalanceCalculated = (calculatedBalance) => {
    setBalance(calculatedBalance);
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack("RootScreen")}
          ></TouchableOpacity>
        }
        centerComponent={{
          text: "Wallet",
          style: styles.headerText
        }}
        backgroundColor="white"
      />

      <View style={styles.headerLow}>
        <Text style={styles.current}>Current Balance</Text>
        <Text style={styles.balance}>{balance.toFixed(2)} Tk</Text>
      </View>

      <View style={styles.dashboard}>
        <Text style={styles.recent}>Recent Transactions</Text>
      </View>

      {/* Data fetching and rendering */}
      <DataPage
        onDataFetched={handleDataFetched}
        onBalanceCalculated={handleBalanceCalculated}
      />

      <ScrollView>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <View style={styles.common}>
              <View style={styles.iconColumn}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
              </View>

              <View style={styles.textColumn}>
                <Text style={styles.boldtext}>{item.type}</Text>
                <Text style={styles.lighttext}>{item.name}</Text>
                <Text style={styles.lightdate}>23 May</Text>
              </View>
              <View style={styles.amountColumn}>
                <Text
                  style={
                    item.type === "Collection"
                      ? styles.moneyGreen
                      : item.type === "Cash out"
                      ? styles.moneyRed
                      : styles.moneyBlack
                  }
                >
                  {item.amount}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>

      {/* Button to navigate to Payment page */}
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate("PaymentPage", { balance })}
      >
        <Text style={styles.paymentButtonText}>Cash Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  headerContainer: {
    borderBottomWidth: 0
  },
  backButton: {
    position: "absolute",
    left: 16
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    margin: 3
  },
  headerLow: {
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  current: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  },
  dashboard: {
    marginLeft: 30,
    marginTop: 2
  },
  recent: {
    fontSize: 20,
    fontWeight: "bold"
  },
  common: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 20,
    padding: 10
  },
  iconColumn: {
    flex: 1,
    alignItems: "center"
  },
  textColumn: {
    flex: 2,
    justifyContent: "center"
  },
  amountColumn: {
    flex: 1,
    alignItems: "flex-end"
  },
  boldtext: {
    fontSize: 18,
    fontWeight: "bold"
  },
  lighttext: {
    fontSize: 16,
    color: "#666"
  },
  lightdate: {
    fontSize: 14,
    color: "#999"
  },
  moneyGreen: {
    fontSize: 16,
    color: "#72C914",
    fontWeight: "bold"
  },
  moneyRed: {
    fontSize: 16,
    color: "#FF0000",
    fontWeight: "bold"
  },
  moneyBlack: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    resizeMode: "cover"
  },
  paymentButton: {
    margin: 20,
    padding: 15,
    backgroundColor: "#72C914",
    alignItems: "center",
    borderRadius: 10
  },
  paymentButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
