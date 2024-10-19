import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const generateRandomData = (year) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return months.map((month) => ({
    month,
    income: Math.floor(Math.random() * 2000) + 500,
    year
  }));
};

const BarChart = ({ navigation }) => {
  const [currentYear, setCurrentYear] = useState(2024);
  const [data, setData] = useState(generateRandomData(currentYear));
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const maxIncome = Math.max(...data.map((item) => item.income));

  const handleNextMonths = () => {
    if (currentMonthIndex + 6 < data.length) {
      setCurrentMonthIndex((prevIndex) => prevIndex + 6);
    } else if (currentYear < 2024) {
      const newYear = currentYear + 1;
      setCurrentYear(newYear);
      setData(generateRandomData(newYear));
      setCurrentMonthIndex(0);
    }
  };

  const handlePreviousMonths = () => {
    if (currentMonthIndex - 6 >= 0) {
      setCurrentMonthIndex((prevIndex) => prevIndex - 6);
    } else if (currentYear > 2022) {
      const newYear = currentYear - 1;
      setCurrentYear(newYear);
      setData(generateRandomData(newYear));
      setCurrentMonthIndex(6);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={24} color="#007BFF" />
        </TouchableOpacity>
        <Text style={styles.yearText}>Year: {currentYear}</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {data
          .slice(currentMonthIndex, currentMonthIndex + 6)
          .map((item, index) => (
            <View key={index} style={styles.barContainer}>
              <View
                style={[
                  styles.bar,
                  { height: `${(item.income / maxIncome) * 100}%` }
                ]}
              >
                <Text style={styles.barLabel}>৳{item.income}</Text>
              </View>
              <Text style={styles.monthLabel}>{item.month}</Text>
            </View>
          ))}
      </ScrollView>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={handlePreviousMonths}
          style={styles.navButton}
        >
          <MaterialIcons name="chevron-left" size={32} color="#007BFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextMonths} style={styles.navButton}>
          <MaterialIcons name="chevron-right" size={32} color="#007BFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 300,
    marginTop: 50
  },
  backButton: {
    padding: 10
  },
  yearText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  barContainer: {
    alignItems: "center",
    marginHorizontal: 10
  },
  bar: {
    width: 60,
    backgroundColor: "#ADD8E6", // Light blue color
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  barLabel: {
    color: "#000", // Black color
    fontWeight: "bold",
    padding: 2,
    fontSize: 12
  },
  monthLabel: {
    marginTop: 10,
    fontSize: 14,
    color: "#333"
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  navButton: {
    padding: 10
  }
});

export default BarChart;
