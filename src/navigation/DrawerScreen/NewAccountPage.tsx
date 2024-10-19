import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CreateAccountForm: React.FC = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    if (
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      address &&
      username &&
      password
    ) {
      Alert.alert("Account Created", `Welcome, ${firstName} ${lastName}!`, [
        { text: "OK", onPress: () => navigation.navigate("Login") }
      ]);
    } else {
      Alert.alert("Error", "Please fill all the fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: "Create an Account",
          style: styles.headerText
        }}
        backgroundColor="#37ac45"
      />
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Last Name"
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Username"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter Your Password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.icon}
            >
              <Text>{passwordVisible ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#37ac45"
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
    color: "white"
  },
  formContainer: {
    alignItems: "center"
  },
  form: {
    backgroundColor: "#006029",
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 30,
    width: "100%"
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: "white"
  },
  input: {
    height: 40,
    borderColor: "#dce7e2",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: "#dce7e2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#dce7e2",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#dce7e2",
    paddingRight: 10,
    marginBottom: 12
  },
  passwordInput: {
    flex: 1,
    padding: 10
  },
  icon: {
    padding: 10
  },
  button: {
    backgroundColor: "#006029",
    paddingVertical: 20,
    paddingHorizontal: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 15
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default CreateAccountForm;
