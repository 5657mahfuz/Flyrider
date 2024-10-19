import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UpcomingShift from "../screens/UpcomingShift";
import DrawerNavigator from "./DrawerNavigator";
import RiderApp from "./DrawerScreen/FirstPage";
import LoginPage from "./DrawerScreen/Login";
import CreateAccountForm from "./DrawerScreen/NewAccountPage";
import PaymentDetails from "./DrawerScreen/PaymentDetails";
import PaymentPage from "./DrawerScreen/PaymentPage";
import OrderDetailsPage from "../screens/DeliveryDetail";

import DeliveryDetail from "../screens/DeliveryDetail";
import PickUpPage from "../screens/PickUpPage";
import DropOffPage from "../screens/DropOffPage";
import PaymentsPage from "../screens/PaymentsPage";

export type RootStackParamList = {
  FoodDeliveryRaider: undefined;
  UpcomingShift: {
    shift: {
      name: string;
      time: string;
    };
  };
  OrderDetailsPage: {
    order: Order; // Define the order parameter
  };
  RestaurantDetailsPage: {
    order: Order; // Define the order parameter
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={RiderApp}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="UpcomingShift"
      component={UpcomingShift}
      options={{
        title: "Upcoming Shift"
      }}
    />
    <Stack.Screen
      name="OrderDetailsPage"
      component={OrderDetailsPage}
      options={{
        title: "Order Details"
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginPage}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="CreateAccount"
      component={CreateAccountForm}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen name="Payment Details" component={PaymentDetails} />
    <Stack.Screen
      name="DrawerNavigation"
      component={DrawerNavigator}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="PaymentPage"
      component={PaymentPage}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name="DeliveryDetail"
      component={DeliveryDetail}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name="PickUpPage"
      component={PickUpPage}
      options={{ title: "Pick Up" }}
    />


    <Stack.Screen
      name="DropOffPage"
      component={DropOffPage}
      options={{
        title: "" 
      }}
    />
    <Stack.Screen
      name="PaymentsPage"
      component={PaymentsPage}
      options={{
        headerShown: false
      }}
    />


    

  </Stack.Navigator>
);

export default StackNavigator;
