import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App({ navigation }) {
  // Function to handle the press of the 'See Details' buttons
  const handleSeeDetails = () => {
    alert("Details not available in this example.");
  };

  // Function to handle opening the referral link
  const handleLinkPress = () => {
    Linking.openURL("https://www.foodhub.com/a/s/s");
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack("RootScreen")}
          >
            <Icon name="arrow-left" size={25} color="#72C914" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: "Refer a Friend Reward",
          style: styles.headerText
        }}
        backgroundColor="white"
      />

      {/* Black Border */}
      <View style={styles.blackBorder} />

      {/* Horizontal Flexbox Container 1 */}
      <View style={styles.horizontalFlexbox}>
        <View style={styles.flexItem}>
          <Text style={styles.flexItemTitle}>EARNED</Text>
          <Text style={styles.flexItemValueGreen}>BDT 0.00</Text>
          <Text style={styles.flexItemSubtitle}>Balance for 6 months</Text>
          <View style={styles.detailsContainer}>
            <TouchableOpacity onPress={handleSeeDetails}>
              <Text style={styles.flexItemLink}>See Details</Text>
            </TouchableOpacity>
            <Icon
              name="arrow-right"
              size={16}
              color="#1E90FF"
              style={styles.forwardIcon}
            />
          </View>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.flexItemTitle}>PENDING</Text>
          <Text style={styles.flexItemValue}>BDT 0.00</Text>
          <Text style={styles.flexItemSubtitle}>Balance for today</Text>
          <View style={styles.detailsContainer}>
            <TouchableOpacity onPress={handleSeeDetails}>
              <Text style={styles.flexItemLink}>See Details</Text>
            </TouchableOpacity>
            <Icon
              name="arrow-right"
              size={16}
              color="#1E90FF"
              style={styles.forwardIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.referal}>
        <Image style={styles.tinyLogo} source={require("../img/refer.png")} />
        <Text style={styles.money}>More friends, More money</Text>
      </View>

      <View style={styles.des}>
        <Text style={styles.description}>
          Refer friends and get money when they complete orders in a certain
          amount of days. All you need to do is share the link below with your
          friends where they can apply to become riders.
        </Text>
      </View>

      <TouchableOpacity onPress={handleLinkPress} style={styles.linedweb}>
        <Text style={styles.linkcolor}>https://www.foodhub.com/a/s/s</Text>
        <Icon
          name="clipboard-multiple-outline"
          size={30}
          style={styles.forwardIcon}
        />
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
    padding: 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  blackBorder: {
    width: "100%",
    height: 60,
    backgroundColor: "#353A40"
  },
  horizontalFlexbox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16
  },
  flexItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  flexItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },
  flexItemValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
    color: "black"
  },
  flexItemValueGreen: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
    color: "green"
  },
  flexItemSubtitle: {
    fontSize: 14,
    color: "black",
    marginBottom: 8
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  flexItemLink: {
    fontSize: 14,
    color: "#1E90FF",
    marginRight: 8
  },
  forwardIcon: {
    marginLeft: 4
  },
  referal: {
    padding: 20,
    alignItems: "center",
    flexDirection:'row',
    alignContent:'space-between',
  },
  tinyLogo: {
    width: 60,
    height: 60,
    paddingLeft:20,
  },
  money: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    paddingLeft:15,
  },
  des: {
    margin: 15,
    textAlign: "center",
    fontWeight:'bold',
  },
  description:{
    fontSize:14,
    color:'black',

  },
  linedweb: {
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
    
  },
  linkcolor: {
    color: "blue",
    fontSize: 16
  }
});
