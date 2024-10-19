import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Header } from "react-native-elements";

const RiderApp = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        centerComponent={{
          text: "",
          style: styles.headerText
        }}
        backgroundColor="#37ac45"
      />
      <Image
        source={require("../img/FirstpageRider.png")}
        style={styles.image}
      />
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    borderBottomWidth: 0,
    backgroundColor: "#37ac45",
    height: 0
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    resizeMode: "cover" // Cover the entire screen and maintain aspect ratio
  }
});

export default RiderApp;
