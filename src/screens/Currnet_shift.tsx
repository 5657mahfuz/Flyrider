import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Status</Text>
        
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.status}>Working</Text>
        <TouchableOpacity>
          <Text style={styles.breakText}>Request Break</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.currentShift}>Current Shift</Text>
      <View style={styles.shiftContainer}>
        
        <View style={styles.shiftDetails}>
          <View style={styles.shiftDate}>
            <Text style={styles.date}>{date.toLocaleString('default', { month: 'short' })}</Text>
            <Text style={styles.dateNumber}>{date.getDate()}</Text>
            <Text style={styles.today}>Today</Text>
          </View>
          <View style={styles.shiftInfo}>
            <Text style={styles.shiftTime}>{date.toLocaleTimeString()}</Text>
            <Text style={styles.shiftLocation}>Peswar</Text>
            <Text style={styles.ongoing}>Ongoing</Text>
          </View>
        </View>
        <Text style={styles.settingsTexts}>Setting</Text>
        <View style={styles.settings}>
          
          <Text style={styles.settingsText}>Available for shift extension</Text>
          <Switch
            onValueChange={() => setIsAvailable(!isAvailable)}
            value={isAvailable}
          />
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          display="default"
         
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop:35,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
   
  },
  breakText: {
    color: '#007bff',
    fontSize: 16,
  
  },
  statusContainer: {
    marginVertical: 10,
    
  },
  status: {
    fontSize: 14,
    color: '#32cd32',
    padding: 6,
    backgroundColor: 'white',
  },
  shiftContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  currentShift: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shiftDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shiftDate: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  date: {
    fontSize: 16,
    color: '#72C914',
  },
  dateNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  today: {
    fontSize: 14,
    color: '#999',
  },
  shiftInfo: {
    flex: 1,
  },
  shiftTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shiftLocation: {
    fontSize: 16,
    marginVertical: 5,
  },
  ongoing: {
    fontSize: 16,
    color: '#32cd32',
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  settingsTexts: {
    marginTop: 20,
    fontSize: 12,

  },
  settingsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default App;
