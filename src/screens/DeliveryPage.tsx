import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Header } from "react-native-elements";

const { width } = Dimensions.get("window");

const initialDeliveryData = [
  {
    id: "1",
    name: "Md. Abdullah Al Hasan",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    userLocation: "Uttora Sector 10",
    destination: "Bashundhara",
    time: "21:45"
  },
  {
    id: "2",
    name: "Minhaj Ibne Amin ",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    userLocation: "Mirpur",
    destination: "Gulshan",
    time: "21:45"
  },
  {
    id: "3",
    name: "Elma Salam",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    userLocation: "Banani",
    destination: "Mohakhali",
    time: "21:45"
  },
  {
    id: "4",
    name: "Al Junayed Borno",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    userLocation: "Shahbagh",
    destination: "Uttora",
    time: "21:45"
  },
  {
    id: "5",
    name: "Mahfuzur Rahman",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    userLocation: "Motijheel",
    destination: "Nikunja",
    time: "21:45"
  },
  {
    id: "6",
    name: "Nazeeba Maheq",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    userLocation: "Dhanmondi",
    destination: "Bashundhara",
    time: "21:45"
  },
  {
    id: "7",
    name: "Nabeeha Mahnoor",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    userLocation: "Gulshan",
    destination: "Mirpur",
    time: "21:45"
  },
  {
    id: "8",
    name: "Warif Al Islam Mahad",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    userLocation: "Mohakhali",
    destination: "Shahbagh",
    time: "21:45"
  },

  {
    id: "9",
    name: "Warif Al Islam ",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    userLocation: "Uttora",
    destination: "Motijheel",
    time: "21:45"
  },
  {
    id: "10",
    name: "Md. Abdullah Al Amin",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    userLocation: "Nikunja",
    destination: "Banani",
    time: "21:45"
  },
  {
    id: "11",
    name: "Salman Ahnaf",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    userLocation: "Dhanmondi",
    destination: "Gulshan",
    time: "21:45"
  },
  {
    id: "12",
    name: "Md. Abdullah Al Mamun",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    userLocation: "Gabtoli",
    destination: "Gulshan",
    time: "21:45"
  },
  {
    id: "13",
    name: "Md. Abdullah Al Hossain",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    userLocation: "Shewra",
    destination: "Baridhara",
    time: "21:45"
  },
  {
    id: "14",
    name: "Tazbiha",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    userLocation: "Mohammadpur",
    destination: "Dhaka University",
    time: "21:45"
  },
  {
    id: "15",
    name: "Mobasshir Ahmed Tahmid",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    userLocation: "ECB Chattar",
    destination: "Dhaka Army Officer's Mess",
    time: "21:45"
  }
];

export default function DeliveryPage() {
  const [deliveryData, setDeliveryData] = useState(initialDeliveryData);
  const navigation = useNavigation();

  // Calculate the number of pending deliveries
  const totalDeliveries = deliveryData.length;

  const handleAccept = (id, userLocation, destination) => {
    // Remove the accepted delivery from the list
    setDeliveryData((prevData) => prevData.filter((item) => item.id !== id));

    // Navigate to the DeliveryDetail page
    navigation.navigate("DeliveryDetail", {
      deliveryId: id,
      userLocation,
      destination
    });
  };

  const handleReject = (id) => {
    // Remove the rejected delivery from the list
    setDeliveryData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const renderDeliveryItem = ({ item }) => (
    <View style={styles.deliveryCard} key={item.id}>
      <Image source={{ uri: item.image }} style={styles.userImage} />
      <View style={styles.deliveryInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.locationText}>
          {item.userLocation} - {item.destination}
        </Text>
        <Text style={styles.timeText}>Time: {item.time}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.acceptButton]}
            onPress={() =>
              handleAccept(item.id, item.userLocation, item.destination)
            }
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.rejectButton]}
            onPress={() => handleReject(item.id)}
          >
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        centerComponent={{ text: "Deliveries", style: styles.headerText }}
        backgroundColor="white"
      />
      <View style={styles.headerLow}>
        {totalDeliveries > 0 ? (
          <Text style={styles.current}>
            You have Pending{" "}
            <Text style={styles.boldText}>{totalDeliveries} Deliveries</Text>
          </Text>
        ) : (
          <Text style={styles.current}></Text>
        )}
      </View>
      {totalDeliveries > 0 ? (
        <FlatList
          data={deliveryData}
          renderItem={renderDeliveryItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.deliveryList}
        />
      ) : (
        <View style={styles.noDeliveriesContainer}>
          <Text style={styles.noDeliveriesText}>
            You have no pending deliveries.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E1F5FE" },
  headerContainer: { borderBottomWidth: 0 },
  headerText: { fontWeight: "bold", fontSize: 20, color: "#333" },
  headerLow: { padding: 20 },
  current: { fontSize: 16, color: "#333", textAlign: "center" },
  boldText: { fontWeight: "bold" },
  deliveryList: { padding: 10 },
  deliveryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  userImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  deliveryInfo: { flex: 1 },
  userName: { fontWeight: "bold", fontSize: 16 },
  locationText: { fontSize: 14, color: "#555" },
  timeText: { fontSize: 14, color: "#555" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "48%"
  },
  acceptButton: {
    backgroundColor: "#72C914"
  },
  rejectButton: {
    backgroundColor: "#F44336"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  noDeliveriesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noDeliveriesText: {
    fontSize: 18,
    color: "#333"
  }
});
