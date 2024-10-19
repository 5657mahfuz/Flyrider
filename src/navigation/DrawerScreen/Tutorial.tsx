import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

// Sample local image paths (update with your actual image paths)
const images = [
  require('../img/ImgTutorial/1.jpg'),
  require("../img/ImgTutorial/2.jpg"),
  require("../img/ImgTutorial/3.jpg"),
  require("../img/ImgTutorial/4.jpg"),
  require("../img/ImgTutorial/5.jpg"),
  require("../img/ImgTutorial/6.jpg"),
  require("../img/ImgTutorial/7.jpg"),
  require("../img/ImgTutorial/8.jpg"),
  require("../img/ImgTutorial/9.jpg"),
  require("../img/ImgTutorial/10.jpg"),
];



export default function Inbox() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Render each image */}
        {images.map((img, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={img} style={styles.fullScreenImage} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#34a843" // Green background for the header (SafeAreaView acts like the header)
  },
  container: {
    flex: 1,
    backgroundColor: "white" // Green background for the image container
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: "#34a843", // Green background behind each image
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10 // Add some space between images
  },
  fullScreenImage: {
    width: "100%", // Set width to 100% of the screen
    height: 900, // Set a fixed height for each image (adjust as needed)
    resizeMode: "contain" // Use "contain" to fit the image without distortion
  }
});
