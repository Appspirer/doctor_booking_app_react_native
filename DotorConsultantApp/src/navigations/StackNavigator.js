import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Boarding, Home, Login, SignUp, LiveChat, Search, Popular, Details, Appointment, MyDoctor, MedicalRecord, AddRecord, MedicineOrder, HelpCenter, TestScreen, PatientDetails, Policy, Settings, Profile } from '../screens';
import BottomTabs from './BottomTabs';
import MyDrawer from './DrawerMenu';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
        <Stack.Screen name="LiveChat" component={LiveChat} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Popular" component={Popular} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="MyDoctor" component={MyDoctor} />
        <Stack.Screen name="MedicalRecord" component={MedicalRecord} />
        <Stack.Screen name="AddRecord" component={AddRecord} />
        <Stack.Screen name="MedicineOrder" component={MedicineOrder} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
        <Stack.Screen name="Policy" component={Policy} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;