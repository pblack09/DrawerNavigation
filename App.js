import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.profile}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.settings}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#7FEAFE",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    flex: 1,
    backgroundColor: "#61B3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  settings: {
    flex: 1,
    backgroundColor: "#AFAFAF",
    alignItems: "center",
    justifyContent: "center",
  },
});
