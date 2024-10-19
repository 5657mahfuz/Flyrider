import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const initialData = [
  { id: "2", key: "NAME", value: "Md. Mahfuzur Rahman", editable: true },
  { id: "3", key: "EMAIL", value: "m.hasan3444@gmail.com", editable: true },
  { id: "4", key: "PASSWORD", value: "*************", editable: true },
  { id: "5", key: "PHONE NUMBER", value: "+0881300659136", editable: true },
  { id: "6", key: "SHORT REFERRAL URL", value: "https://google.com", editable: false },
  { id: "7", key: "JOIN AT", value: "03.03.2023", editable: false },
  { id: "8", key: "ACTIVE CONTRACT", value: "03.03.2023", editable: false },
];

export default function MyProfilePage({ navigation }) {
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const openEditModal = (item) => {
    if (item.editable) {
      setSelectedItem(item);
      setInputValue(item.value);
      setIsModalVisible(true);
    }
  };

  const saveEdit = () => {
    const updatedData = data.map((item) =>
      item.id === selectedItem.id ? { ...item, value: inputValue } : item
    );
    setData(updatedData);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack("")}
          >
            <Icon name="arrow-left" size={25} color="#72C914" />
          </TouchableOpacity>
        }
        centerComponent={{ text: "My Profile", style: styles.headerText }}
        backgroundColor="white"
      />

      <View style={styles.graySection}>
        <Text style={styles.sectionText}></Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.sectionTitle}>
          <Text style={styles.personalInfo}>Personal Info</Text>
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity>
              <Text style={styles.itemText}>{item.key}</Text>
              <Text style={styles.itemValue}>{item.value}</Text>
            </TouchableOpacity>
            {item.editable && (
              <TouchableOpacity onPress={() => openEditModal(item)}>
                <Icon name="pencil" size={20} color="#72C914" style={styles.editIcon} />
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Edit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit {selectedItem?.key}</Text>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={saveEdit}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfefe",
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  graySection: {
    backgroundColor: "#353A40",
    padding: 10,
    marginLeft: -10,
    marginRight: -10,
  },
  sectionText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f1f2ef",
    marginLeft: -10,
    marginRight: -10,
    color: "black",
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  headerText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  itemValue: {
    color: "black",
    fontSize: 14,
    marginTop: 4,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  backButton: {
    padding: 10,
  },
  personalInfo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editIcon: {
    paddingLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#72C914",
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});
