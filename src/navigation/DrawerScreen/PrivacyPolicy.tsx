import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Privacy: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
        centerComponent={{ text: "Privacy Policy", style: styles.headerText }}
        backgroundColor="white"
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.text}>
            Welcome to our Privacy Policy page. When you use our mobile
            application, you trust us with your information. We are committed to
            protecting your privacy and ensuring the security of your data.
          </Text>

          <Text style={styles.sectionTitle}>Information We Collect</Text>
          <Text style={styles.text}>
            We collect various types of information in connection with your use
            of our application, including personal details you provide when
            registering, usage data, and device information. This helps us to
            enhance your experience and provide you with better services.
          </Text>

          <Text style={styles.sectionTitle}>How We Use Your Information</Text>
          <Text style={styles.text}>
            The information we collect is used to personalize your experience,
            improve our application, and communicate with you about updates and
            offers. We may also use the information for analytics and research
            purposes.
          </Text>

          <Text style={styles.sectionTitle}>Data Security</Text>
          <Text style={styles.text}>
            We implement a variety of security measures to maintain the safety
            of your personal information. This includes using secure servers,
            encryption, and access controls. Despite our efforts, no security
            system is impenetrable, and we cannot guarantee complete security.
          </Text>

          <Text style={styles.sectionTitle}>Your Rights</Text>
          <Text style={styles.text}>
            You have the right to access, correct, or delete your personal
            information. You may also request that we stop processing your data.
            To exercise these rights, please contact us using the information
            provided below.
          </Text>

          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions or concerns about our privacy policy,
            please contact us at:
            {"\n"}
            Email: privacy@ourapp.com
            {"\n"}
            Phone: +123 456 7890
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    color: "black",
    marginBottom: 16,
  },
});
