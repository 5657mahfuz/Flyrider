import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface DrawerContentProps {
  navigation: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ navigation }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headercontent}>
          <Text style={styles.headercontentText}>Mahfuzur Rahman</Text>
          <Icon name="medal" size={30} color="black" />
          <Text style={styles.headercontentText}>10</Text>
        </View>
        <Text style={styles.headercontentTexts}>ID: 2030988</Text>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "My Profile" && styles.myProfileHoveredItem
          ]}
          onPress={() => navigation.navigate("My Profile")}
        >
          <View style={styles.starContainer}>
            <Text style={styles.texts}>My Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.gap}></View>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "AvailableShift" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("AvailableShift")}
        >
          <View style={styles.starContainer}>
            <Icon name="calendar-search" size={30} color="black" />
            <Text style={styles.text}> Available Shift</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "MyShift" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("MyShift")}

        >
          <View style={styles.starContainer}>
            <Icon name="calendar-multiple-check" size={30} color="black" />
            <Text style={styles.text}> My Shift </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "Absences1" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("Absences1")}
        >
          <View style={styles.starContainer}>
            <Icon name="calendar-remove-outline" size={30} color="black" />
            <Text style={styles.text}> Absences </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={[styles.textUl, hoveredItem === "Inbox" && styles.hoveredItem]}
          onPress={() => navigation.navigate("Inbox")}
        >
          <View style={styles.starContainer}>
            <Icon name="bell" size={30} color="black" />
            <Text style={styles.text}> Inbox </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "Payment" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("Payment")}
        >
          <View style={styles.starContainer}>
            <Icon name="cash-check" size={30} color="black" />
            <Text style={styles.text}> Payment Statement</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "Refer_a_Friend" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("Refer_a_Friend")}
        >
          <View style={styles.starContainer}>
            <Icon name="cash-check" size={30} color="black" />
            <Text style={styles.text}> Refer a Friend Reward</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "Performance" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("Performance")}
        >
          <View style={styles.starContainer}>
            <Icon name="chart-areaspline" size={30} color="black" />
            <Text style={styles.text}> Performance </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "Tutorial" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("Tutorial")}
        >
          <View style={styles.starContainer}>
            <Icon name="desktop-mac" size={30} color="black" />
            <Text style={styles.text}> Tutorial </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "RiderSupport" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("RiderSupport")}
        >
          <View style={styles.starContainer}>
            <Icon name="message-question-outline" size={30} color="black" />
            <Text style={styles.text}> Rider Support </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "Privacy" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("Privacy")}
        >
          <View style={styles.starContainer}>
            <Icon name="account-lock" size={30} color="black" />
            <Text style={styles.text}> Privacy Policy </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={[
            styles.textUl,
            hoveredItem === "Setting" && styles.hoveredItem
          ]}
          onPress={() => navigation.navigate("Setting")}
        >
          <View style={styles.starContainer}>
            <Icon name="account-wrench" size={30} color="black" />
            <Text style={styles.text}> Settings </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={[styles.textUl, hoveredItem === "Home" && styles.hoveredItem]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textlogout}>Log Out </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#f8f9f9",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  headercontentTexts: {
    fontSize: 18,
    fontWeight: "bold"
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headercontent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60
  },
  headercontentText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginRight: 5
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
    alignSelf: "center",
    marginVertical: 5 // Reduced padding
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 2 // Reduced margin
  },
  textUl: {
    paddingVertical: 5 // Reduced padding
  },
  texts: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#72C914"
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5 // Reduced margin
  },
  gap: {
    paddingBottom: 5 // Reduced padding
  },
  textlogout: {
    fontSize: 18,
    padding: 10, // Reduced padding
    fontWeight: "bold",
    color: "red"
  },
  hoveredItem: {
    backgroundColor: "#72C914"
  },
  myProfileHoveredItem: {
    backgroundColor: "#03198A"
  }
});
