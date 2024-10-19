import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Button, Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { shifts, Shift } from '../Shift'; // Import shifts from your Shift.tsx file
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/StackNavigator';


export default function SchedulePage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Specify the type for navigation
  const totalShifts: number = shifts.length;

  const handleTakeShift = (shift: Shift) => {
    navigation.navigate('UpcomingShift', { shift });
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
            <Icon name="arrow-back" size={25} color="#72C914" />
          </TouchableOpacity>
        }
        centerComponent={{ text: 'Available Shifts', style: styles.headerText }}
        backgroundColor="white"
      />

      <CalendarStrip
        style={styles.calendar}
        calendarColor={'#353A40'}
        calendarHeaderStyle={{ color: 'white' }}
        dateNumberStyle={{ color: 'white' }}
        dateNameStyle={{ color: 'white' }}
        highlightDateNumberStyle={{ color: 'yellow' }}
        highlightDateNameStyle={{ color: 'yellow' }}
        disabledDateNameStyle={{ color: 'grey' }}
        disabledDateNumberStyle={{ color: 'grey' }}
      />

      <Text style={styles.availableShifts}>
        Total Available Shifts: {totalShifts}
      </Text>

      <ScrollView contentContainerStyle={styles.shiftList}>
        {shifts.map((shift: Shift, index: number) => (
          <View key={index} style={styles.shiftItem}>
            <View style={styles.shiftDetails}>
              <Text style={styles.shiftArea}>{shift.name}</Text>
              <Text style={styles.shiftTime}>{shift.time}</Text>
            </View>
            <Button
              title="Take Shift"
              buttonStyle={styles.takeShiftButton}
              onPress={() => handleTakeShift(shift)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendar: {
    height: 150,
    paddingTop: 30,
    paddingBottom: 0,
  },
  availableShifts: {
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  shiftList: {
    paddingHorizontal: 10,
  },
  shiftItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  shiftDetails: {
    flexDirection: 'column',
  },
  shiftArea: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shiftTime: {
    fontSize: 14,
    marginTop: 10,
    color: '#888',
  },
  takeShiftButton: {
    backgroundColor: '#597FAC',
  },
  backButton: {
    padding: 10,
  },
});
