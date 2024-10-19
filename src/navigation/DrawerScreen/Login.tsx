import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setUsername("");
      setPassword("");
      setErrorMessage("");
    }, [])
  );

  const handlePress = () => {
    if (username === "0000" && password === "0000") {
      navigation.navigate("DrawerNavigation");
    } else {
      setErrorMessage("Username or Password is incorrect");
      setUsername("");
      setPassword("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <ImageBackground
      source={require("../img/img.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Header
          containerStyle={styles.headerContainer}
          backgroundColor="white"
        />
        <Image source={require("../img/User.png")} style={styles.imgUser} />
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Username"
              value={username}
              onChangeText={setUsername}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter Your Password"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.icon}
              >
                <Icon
                  name={passwordVisible ? "eye" : "eye-slash"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {errorMessage ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.createNew}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <TouchableOpacity>
            <Text style={styles.createNewTextred}>Forget Password</Text>
          </TouchableOpacity>
          <Text style={styles.createNewText}>Register a new account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    marginTop: 150,
    alignItems: "center",
    paddingHorizontal: 16,
    width: "100%"
  },
  headerContainer: {
    borderBottomWidth: 0,
    width: "100%"
  },
  imgUser: {
    height: 80,
    width: 80,
    marginBottom: 20,
    resizeMode: "contain",
    marginTop: -100
  },
  createNew: {
    padding: 10
  },
  createNewText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 18
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
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
    marginBottom: 20,
    width: "100%"
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "white"
  },
  input: {
    borderColor: "blue",
    borderWidth: 2,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#dce7e2"
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#dce7e2",
    paddingRight: 10
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
    paddingVertical: 15,
    paddingHorizontal: 50,
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
    elevation: 15,
    marginBottom: 20
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  error: {
    color: "red",
    marginTop: 10
  },
  createNewTextred: {
    color: "red",
    textAlign: "center",
    marginTop: 0,
    fontWeight: "bold",
    paddingBottom: 10
  }
});
