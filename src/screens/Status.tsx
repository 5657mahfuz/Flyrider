import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Button,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigator';
import { shifts, Shift } from './Shift';

const { width, height } = Dimensions.get('window');

const FoodDeliveryRaiderPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showAll, setShowAll] = useState(false);
  const [runningShift, setRunningShift] = useState<Shift | null>(null); // Track running shift
  const [timer, setTimer] = useState<number>(0); 

  // Start the timer when a shift starts
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (runningShift) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000); // Increment the timer every second
    }
    return () => clearInterval(interval); // Clear the interval when the shift ends or component unmounts
  }, [runningShift]);

  // Format time to HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTakeShift = (shift: Shift) => {
    navigation.navigate('UpcomingShift', {
      shift,
      onShiftStart: (startedShift: Shift) => {
        setRunningShift(startedShift); // Set running shift when the shift starts
        setTimer(0); // Reset the timer
      },
    });
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const handleBreakShift = () => {
    Alert.alert(
      "End Shift",
      "Are you sure you want to end the current shift?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "End Shift",
          onPress: () => setRunningShift(null), // Clear running shift
        },
      ]
    );
  };

  const renderShiftItem = ({ item }: { item: Shift }) => (
    <View style={styles.shiftWidget}>
      <Text style={styles.shiftWidgetText}>{item.name}</Text>
      <Text style={styles.shiftWidgetTime}>{item.time}</Text>
      <Button title="Take Shift" onPress={() => handleTakeShift(item)} color="#72C914" />
    </View>
  );

  const renderVerticalShifts = () => {
    const rows = [];
    for (let i = 0; i < shifts.length; i += 2) {
      rows.push(
        <View style={styles.verticalRow} key={i}>
          <View style={styles.verticalShift}>
            {renderShiftItem({ item: shifts[i] })}
          </View>
          {i + 1 < shifts.length && (
            <View style={styles.verticalShift}>
              {renderShiftItem({ item: shifts[i + 1] })}
            </View>
          )}
        </View>
      );
    }
    return rows;
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#72C914" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Status</Text>
      </View>

      {/* If there's a running shift, show the running shift widget */}
      {runningShift ? (
        <View style={styles.runningShiftWidget}>
          <Text style={styles.runningShiftTitle}>Ongoing</Text>
          <Text style={styles.runningShiftName}>{runningShift.name}</Text>
          <Text style={styles.runningShiftTime}>{runningShift.time}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateText}>{formatDate(new Date())}</Text>
            <Text style={styles.timerText}>Working Hours: {formatTime(timer)}</Text>
          </View>
          <Button title="Break Request" onPress={handleBreakShift} color="red" />
        </View>
      ) : (
        <>
          <View style={styles.notWorkingWidget}>
            <View style={styles.notWorkingStatusContainer}>
              <Text style={styles.notWorkingStatusText}>Not Working</Text>
            </View>
          </View>
          <View style={styles.upcomingShift}>
            <View style={styles.iconContainer}>
              <Icon name="flash" size={30} color="black" />
            </View>
            <Text style={styles.upcomingShiftText}>Book Upcoming Shifts</Text>
            <TouchableOpacity style={styles.seeAllButton} onPress={toggleShowAll}>
              <Text style={styles.seeAllText}>{showAll ? 'Hide All' : 'See All'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>Oh, you can’t work Without shifts!</Text>
          </View>
          {showAll ? (
            <View style={styles.verticalShiftContainer}>
              {renderVerticalShifts()}
            </View>
          ) : (
            <FlatList
              data={shifts}
              renderItem={renderShiftItem}
              keyExtractor={(item) => item.name}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.shiftWidgets}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.07,
    shadowColor: '#fdfefe',
    marginTop: 50,
    position: 'relative',
    backgroundColor: 'white',
  },
  menuButton: {
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{ translateY: -15 }],
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: width * 0.045,
    color: 'black',
  },
  notWorkingWidget: {
    flexDirection: 'row',
    marginTop: 10,
    width: width,
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  notWorkingStatusContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
  },
  notWorkingStatusText: {
    fontSize: width * 0.03,
    color: 'red',
  },
  upcomingShift: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 25,
  },
  iconContainer: {
    marginLeft: 5,
  },
  upcomingShiftText: {
    fontSize: width * 0.055,
    color: 'black',
    fontWeight: 'bold',
  },
  seeAllButton: {
    padding: 7,
    marginRight: 10,
    color: "#72C914"
  },
  seeAllText: {
    fontSize: width * 0.04,
    color: '#007BFF',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginHorizontal: 70,
    color: "#72C914",
  },
  message: {
    marginTop: 1,
  },
  messageText: {
    fontSize: width * 0.035,
    color: '#888',
    marginLeft: 15,
  },
  shiftWidgets: {
    marginTop: 10,
    paddingVertical: 0,
    padding: 5,
  },
  shiftWidget: {
    width: width * 0.4,
    height: height * 0.2,
    marginLeft: 10,
    marginTop: 20,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#ffff',
    borderRadius: 15,
    alignItems: 'center',
  },
  shiftWidgetText: {
    top: 10,
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: 15,
    color: "black",
  },
  shiftWidgetTime: {
    fontSize: width * 0.035,
    color: '#555',
    marginBottom: 25,
  },
  verticalShiftContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginHorizontal: 5,
  },
  verticalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  verticalShift: {
    flex: 1,
    marginHorizontal: 5,
  },
  runningShiftWidget: {
    backgroundColor: 'white',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  runningShiftTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#72C914',
  },
  runningShiftName: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  runningShiftTime: {
    fontSize: 20,
    color: '#72C914',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  dateTimeContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  timerText: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default FoodDeliveryRaiderPage;
