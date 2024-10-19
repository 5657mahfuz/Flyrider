import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import DrawerContent from "./DrawerContent";

import Inbox from "./DrawerScreen/Inbox";
import MyProfilePage from "./DrawerScreen/MyProfile";

import PaymentsScreen from "./DrawerScreen/Payment";
import Performance from "./DrawerScreen/Performance11";
import Privacy from "./DrawerScreen/Privacy";
import PrivacyPolicy from "./DrawerScreen/PrivacyPolicy";
import Refer_a_Friend from "./DrawerScreen/Refer_a_Friend";
import RiderSupport from "./DrawerScreen/RiderSupport";
import Setting from "./DrawerScreen/Setting";
import Tutorial from "./DrawerScreen/Tutorial";

import BottomTabNavigator from "./ButtomTabNavigator";
import Absences1 from "../screens/DrawerScreen/Absences1";
import AvailableShift from "../screens/DrawerScreen/AvailableShift";
import MyShift from "../screens/DrawerScreen/MyShift";

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      // Add any default screen options here, e.g.,
      headerShown: false
    }}
  >
    <Drawer.Screen
      name="Status"
      component={BottomTabNavigator}
      options={{
        headerShown: false,
        headerTitleAlign: "center", // This centers the header title
        headerTitleStyle: {
          fontWeight: "bold" // Optional: Make the title bold
        }
      }}
    />
    <Drawer.Screen name="AvailableShift" component={AvailableShift} />
    <Drawer.Screen name="MyShift" component={MyShift} />
    <Drawer.Screen name="Absences1" component={Absences1} />
    <Drawer.Screen name="Inbox" component={Inbox} />
    <Drawer.Screen name="Payment" component={PaymentsScreen} />
    <Drawer.Screen name="Refer_a_Friend" component={Refer_a_Friend} />
    <Drawer.Screen name="Performance" component={Performance} />
    <Drawer.Screen name="Tutorial" component={Tutorial} />
    <Drawer.Screen name="RiderSupport" component={RiderSupport} />
    <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Drawer.Screen name="Setting" component={Setting} />
    <Drawer.Screen name="My Profile" component={MyProfilePage} />
    <Drawer.Screen name="Privacy" component={Privacy} />
  </Drawer.Navigator>
);
export default DrawerNavigator;
