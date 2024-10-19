import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { feedbackData } from "../Data/feedbackData"; // Import the feedback data

// Calculate average rating
const calculateAverageRating = () => {
  const totalRatings = feedbackData.length;
  const sumRatings = feedbackData.reduce(
    (sum, feedback) => sum + feedback.rating,
    0
  );
  return totalRatings > 0 ? (sumRatings / totalRatings).toFixed(1) : 0;
};

// Calculate star distribution
const getStarDistribution = () => {
  const distribution = [0, 0, 0, 0, 0];
  feedbackData.forEach((feedback) => {
    distribution[feedback.rating - 1] += 1;
  });
  return distribution.reverse(); // Reverse to have 5 stars at the top
};

const PerformanceScreen = () => {
  const navigation = useNavigation(); // Hook to get the navigation object
  const averageRating = calculateAverageRating();
  const totalRatings = feedbackData.length;
  const starDistribution = getStarDistribution();

  const renderFeedbackItem = ({ item }) => (
    <View style={styles.feedbackItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.feedbackText}>
        <View style={styles.nameAndDate}>
          <Text style={styles.feedbackName}>{item.name}</Text>
          <Text style={styles.feedbackDate}>{item.date}</Text>
        </View>
        <Text style={styles.feedbackTitle}>{item.commentTitle}</Text>
        <Text style={styles.feedbackComment}>{item.commentText}</Text>
        <View style={styles.starRow}>
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              name={index < item.rating ? "star" : "star-outline"}
              size={20}
              color="#72C914"
            />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={25} color="#72C914" />
          </TouchableOpacity>
        }
        centerComponent={{ text: "Performance", style: styles.headerText }}
        backgroundColor="white"
      />
      <Text style={styles.sectionTitle}>Team Performance</Text>
      <Text style={styles.sectionSubtitle}>
        Track your last week’s result and potential for improvement
      </Text>
      <Text style={styles.performanceQuestion}>What is good performance?</Text>

      <View style={styles.currentBatch}>
        <View style={styles.currentBatchTextContainer}>
          <Text style={styles.flexItemTitles}>Unavailable Items</Text>
          <View style={styles.graphanddata}>
            <View style={styles.pieChartContainer}>
              <View style={styles.pieChart} />
            </View>
            <Text style={styles.datas}>10%</Text>
          </View>
        </View>
      </View>

      <View style={styles.ratingContainer}>
        <View style={styles.ratingTextContainer}>
          <Text style={styles.ratingText}>{averageRating}</Text>
          <Text style={styles.totalRatingsText}>
            Out of 5 ({totalRatings} Ratings)
          </Text>
        </View>
        <View style={styles.starDistributionContainer}>
          {starDistribution.map((count, index) => (
            <View key={index} style={styles.starDistributionRow}>
              <View style={styles.starRowLeft}>
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name={i < 5 - index ? "star" : "star-outline"}
                    size={20}
                    color="#72C914"
                  />
                ))}
              </View>
              <View style={styles.progressBarContainer}>
                <View
                  style={[
                    styles.progressBar,
                    { width: `${(count / totalRatings) * 100}%` },
                  ]}
                />
              </View>
              <Text style={styles.starCount}>{count}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Last 7 Days</Text>
      <FlatList
        data={feedbackData}
        renderItem={renderFeedbackItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedbackList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 10,
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 30,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#7A7A7A",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  performanceQuestion: {
    fontSize: 25,
    color: "#72C914",
    marginHorizontal: 16,
    marginBottom: 16,
    fontWeight: "bold",
  },
  currentBatch: {
    flexDirection: "row",
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: "#72C914",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5.24,
    elevation: 5,
    marginBottom: 20,
  },
  currentBatchTextContainer: {
    flexShrink: 1,
  },
  flexItemTitles: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  graphanddata: {
    flexDirection: "row",
    marginTop: 10,
  },
  pieChartContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  pieChart: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#72C914",
    borderWidth: 10,
    borderColor: "white",
  },
  datas: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  ratingContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  ratingTextContainer: {
    flex: 1,
  },
  ratingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#72C914",
  },
  totalRatingsText: {
    fontSize: 14,
    color: "#7A7A7A",
  },
  feedbackList: {
    paddingHorizontal: 16,
  },
  feedbackItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  feedbackText: {
    flex: 1,
  },
  nameAndDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  feedbackName: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  feedbackDate: {
    fontSize: 12,
    color: "#7A7A7A",
  },
  feedbackTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  feedbackComment: {
    fontSize: 12,
    color: "#7A7A7A",
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starDistributionContainer: {
    flex: 1,
  },
  starDistributionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  starRowLeft: {
    flexDirection: "row",
    marginRight: 10,
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#72C914",
  },
  starCount: {
    width: 30,
    textAlign: "right",
  },
});

export default PerformanceScreen;
