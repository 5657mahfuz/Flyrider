import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Header } from "react-native-elements";

const Nav_map = ({ navigation }) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 23.813006,
    longitude: 90.426026,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });

  const handleLocationPress = () => {
    // Center the map on a predefined location
    const newRegion = {
      latitude: 23.813006,
      longitude: 90.426026,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    };
    setRegion(newRegion);
    mapRef.current.animateToRegion(newRegion, 1000);
  };

  const handleDirectionPress = () => {
    // Add functionality to handle directions
    console.log("Direction button pressed");
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
            
          </TouchableOpacity>
        }
        centerComponent={{
          text: "Google Map",
          style: styles.headerText
        }}
        backgroundColor="white"
      />

      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      />
      <View style={styles.directionIconContainer}>
        <TouchableOpacity onPress={handleDirectionPress}>
          <Icon name="compass-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.locationIconContainer}>
        <TouchableOpacity onPress={handleLocationPress}>
          <Icon name="crosshairs-gps" size={30} color="#D50E61" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nav_map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  map: {
    position: "absolute",
    top: 100, // Adjust this value to match the height of the header
    left: 0,
    right: 0,
    bottom: 0
  },
  headerContainer: {
    borderBottomWidth: 0,
    height: 100 // Set this to the height of your header
  },
  backButton: {
    paddingLeft:20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  directionIconContainer: {
    position: "absolute",
    top: 120, // Adjust this value if needed
    right: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
    elevation: 3
  },
  locationIconContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 3
  }
});
