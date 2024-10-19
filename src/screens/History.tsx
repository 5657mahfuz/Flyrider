import React, { useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Header, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  deliveries,
  getRandomDateAndTime
} from "../navigation/Data/dataHistory"; // Import from dataHistory.js

const PaymentsScreen = ({ navigation }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [randomAmount, setRandomAmount] = useState(0);

  const toggleExpand = (id) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id);
    } else {
      newExpandedItems.add(id);
    }
    setExpandedItems(newExpandedItems);
  };

  const handleCollectedPress = () => {
    const amount = (Math.random() * 500).toFixed(2); // Generate random amount
    setRandomAmount(amount);
    setIsModalVisible(true);
  };

  const handleDeliveriesPress = () => {
    navigation.navigate("Deliveries"); // Navigate to DeliveriesScreen
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack("RootScreen")}
          ></TouchableOpacity>
        }
        centerComponent={{
          text: "History",
          style: styles.headerText
        }}
        backgroundColor="white"
      />

      <View style={styles.statistics}>
        <TouchableOpacity style={styles.stat} onPress={handleDeliveriesPress}>
          <Icon name="cube-outline" size={24} color="#000" />
          <Text style={styles.statText}>Deliveries</Text>
          <Text style={styles.statNumber}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stat} onPress={handleCollectedPress}>
          <Icon name="cash" size={24} color="#000" />
          <Text style={styles.statText}>Collected</Text>
          <Text style={styles.statNumber}>{randomAmount} Tk</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>All Deliveries</Text>
      <FlatList
        data={deliveries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isExpanded = expandedItems.has(item.id);
          const { randomDate, formattedTime } = getRandomDateAndTime();
          const earnedPoints = Math.floor(Math.random() * 100); // Random points

          return (
            <View>
              <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                <ListItem bottomDivider>
                  <Icon name="cash-multiple" size={24} color="#000" />
                  <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>
                      Finished at {item.time}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <Icon
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={40}
                    color="#72C914"
                  />
                </ListItem>
              </TouchableOpacity>
              {isExpanded && (
                <View style={styles.expandedView}>
                  <Text style={styles.expandedText}>Date: {randomDate}</Text>
                  <Text style={styles.expandedText}>
                    Finished at {formattedTime}
                  </Text>
                  <Text style={styles.expandedText}>
                    Earned: {randomAmount} Tk
                  </Text>
                  <Text style={styles.expandedText}>
                    Points: {earnedPoints}
                  </Text>
                </View>
              )}
            </View>
          );
        }}
      />

      {/* Modal for Collected Popup */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              You've collected {randomAmount} Tk!
            </Text>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  headerContainer: {
    borderBottomWidth: 0
  },
  backButton: {
    padding: 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 40
  },
  stat: {
    alignItems: "center"
  },
  statText: {
    fontSize: 14,
    color: "#888"
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold"
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 15,
    marginVertical: 10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginBottom: 10
  },
  expandedView: {
    paddingLeft: 70,
    paddingBottom: 10,
    backgroundColor: "#f0f0f0"
  },
  expandedText: {
    fontSize: 14,
    color: "#555"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center"
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#72C914",
    borderRadius: 5
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16
  }
});

export default PaymentsScreen;
