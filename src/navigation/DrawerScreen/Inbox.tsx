import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Messages categorized by type
const messagesByCategory = {
  All: [
    { id: 1, text: "প্রতি অর্ডার এ অতিরিক্ত ৫ টাকা!!!", fullText: "প্রতি অর্ডার এ অতিরিক্ত ৫ টাকা!!! বিস্তারিত", seen: false, time: "12:00 PM" },
    { id: 2, text: "নতুন সার্ভিস ফি রেট প্রকাশিত হয়েছে।", fullText: "নতুন সার্ভিস ফি রেট বিস্তারিত জানতে ক্লিক করুন।", seen: false, time: "12:30 PM" },
    { id: 3, text: "নিয়ম কানুন আপডেট হয়েছে।", fullText: "নিয়ম কানুন আপডেট সম্পর্কে বিস্তারিত জানতে ক্লিক করুন।", seen: false, time: "01:00 PM" },
    { id: 4, text: "নতুন সার্ভিস ফি রেট", fullText: "নতুন সার্ভিস ফি রেট প্রকাশিত হয়েছে। বিস্তারিত জানতে ক্লিক করুন।", seen: false, time: "01:30 PM" },
    { id: 5, text: "ঘোষনা: নতুন অফার!", fullText: "নতুন অফার সম্পর্কে জানতে ক্লিক করুন।", seen: false, time: "02:00 PM" },
    { id: 6, text: "ট্রেনিং এর সময়সূচী প্রকাশিত হয়েছে।", fullText: "ট্রেনিং এর বিস্তারিত জানতে ক্লিক করুন।", seen: false, time: "02:30 PM" },
  ],
  RulesScreen: [
    { id: 7, text: "নিয়ম কানুন আপডেট হয়েছে।", fullText: "নিয়ম কানুন আপডেট সম্পর্কে বিস্তারিত জানতে ক্লিক করুন।", seen: false, time: "01:00 PM" },
  ],
  ServiceFeeScreen: [
    { id: 8, text: "নতুন সার্ভিস ফি রেট", fullText: "নতুন সার্ভিস ফি রেট প্রকাশিত হয়েছে। বিস্তারিত জানতে ক্লিক করুন।", seen: false, time: "01:30 PM" },
  ],
  AnnouncementScreen: [
    { id: 9, text: "ঘোষনা: নতুন অফার!", fullText: "নতুন অফার সম্পর্কে জানতে ক্লিক করুন।", seen: false, time: "02:00 PM" },
  ],
  TrainingScreen: [
    { id: 10, text: "ট্রেনিং এর সময়সূচী প্রকাশিত হয়েছে।", fullText: "ট্রেনিং এর বিস্তারিত জানতে ক্লিক করুন।", seen: false, time: "02:30 PM" },
  ],
};

export default function Inbox() {
  const navigation = useNavigation(); // Hook for navigation
  const [currentCategory, setCurrentCategory] = useState("All"); // State to track current category
  const [selectedMessage, setSelectedMessage] = useState(null); // For tracking the selected message
  const [modalVisible, setModalVisible] = useState(false); // For modal visibility

  const options = [
    { name: "All", route: "AllScreen" },
    { name: "নিয়ম কানুন", route: "RulesScreen" },
    { name: "সার্ভিস ফী", route: "ServiceFeeScreen" },
    { name: "ঘোষনা", route: "AnnouncementScreen" },
    { name: "ট্রেনিং এবং রেগুলেটের", route: "TrainingScreen" }
  ];

  const handleOptionPress = (route) => {
    setCurrentCategory(route); // Update the current category
  };

  const handleReadMessage = (id) => {
    const selectedMsg = messagesByCategory[currentCategory].find((msg) => msg.id === id);
    if (selectedMsg) {
      setSelectedMessage(selectedMsg); // Set the selected message
      messagesByCategory[currentCategory] = messagesByCategory[currentCategory].map(msg =>
        msg.id === id ? { ...msg, seen: true } : msg
      );
      setModalVisible(true); // Show modal
    }
  };

  const closeModal = () => {
    setModalVisible(false); // Hide modal
    setSelectedMessage(null); // Clear selected message
  };

  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Inbox</Text>
      </View>

      {/* Horizontal Options */}
      <View style={styles.horizontalScrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionContainer}
              onPress={() => handleOptionPress(item.route)} // Handle button press
            >
              <Text style={styles.optionText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.content}>
        {/* Vertical Line and FlatLists */}
        <View style={styles.descriptionContainer}>
          <View style={styles.verticalLine}></View>
          <View style={styles.flatListsContainer}>
            {messagesByCategory[currentCategory].map((msg, index) => (
              <View key={msg.id} style={styles.flatListWrapper}>
                <FlatList
                  horizontal
                  data={[msg]}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.descriptionBox,
                        msg.seen ? styles.seenMessageBox : styles.unseenMessageBox,
                      ]}
                      onPress={() => handleReadMessage(msg.id)} // Show modal with full message
                    >
                      <Text style={styles.descriptionText}>{item.text}</Text>
                      <Text style={styles.messageTime}>{item.time}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.id.toString()} // Ensure unique key extraction
                />
                {index < messagesByCategory[currentCategory].length - 1 && (
                  <View style={styles.separator}></View>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Modal for displaying full message */}
      {selectedMessage && (
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Message Details</Text>
                </View>
                <Text style={styles.modalMessage}>{selectedMessage.fullText}</Text>
                <Text style={styles.modalTime}>{selectedMessage.time}</Text>
                <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                  <Text style={styles.modalCloseButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 30,
  },
  backButton: {
    padding: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    flex: 1
  },
  horizontalScrollContainer: {
    paddingVertical: 5,
    backgroundColor: "white"
  },
  horizontalScroll: {
    paddingHorizontal: 5
  },
  optionContainer: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  optionText: {
    fontSize: 16,
    fontWeight: "400"
  },
  content: {
    flex: 1,
    padding: 10
  },
  descriptionContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start"
  },
  verticalLine: {
    width: 2,
    backgroundColor: "#28b463",
    height: "100%"
  },
  flatListsContainer: {
    flex: 1
  },
  flatListWrapper: {
    marginBottom: 20,
    marginLeft: 10,
  },
  descriptionBox: {
    backgroundColor: "#FFE3E3",
    borderRadius: 10,
    padding: 15,
    width: 250,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5
  },
  descriptionText: {
    fontSize: 14,
    color: "black",
    marginBottom: 8,
    paddingLeft: 5,
    paddingRight: 5
  },
  messageTime: {
    fontSize: 12,
    color: "black",
    textAlign: "right"
  },
  separator: {
    height: 2,
    backgroundColor: "lightgray",
    marginVertical: 40
  },
  seenMessageBox: {
    backgroundColor: "#E0E0E0"
  },
  unseenMessageBox: {
    backgroundColor: "#95CC5A"
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  modalBackButton: {
    paddingRight: 10
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center"
  },
  modalTime: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20
  },
  modalCloseButton: {
    backgroundColor: "#95CC5A",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  modalCloseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
