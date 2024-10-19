import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import History from "../screens/History";
import Nav_map from "../screens/Nav_map";
import Status from "../screens/Status";
import Wallet from "../screens/Wallet";
import DeliveryPage from "../screens/DeliveryPage";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="check" color={"#72C914"} size={30} />
          ),
          headerShown: false

        }}
      />
      <Tab.Screen
        name="Deliveries"
        component={DeliveryPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bike" color={"#72C914"} size={30} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Map"
        component={Nav_map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-outline" color={"#72C914"} size={30} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={"#72C914"} size={30} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" color={"#72C914"} size={30} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
