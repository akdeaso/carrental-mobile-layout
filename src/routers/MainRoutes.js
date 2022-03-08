import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import DaftarMobil from '../screens/DaftarMobil/DaftarMobil';
import Akun from '../screens/Akun/Akun';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainRoutes = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="DaftarMobil" component={DaftarMobil} options={{ headerShown: false }} />
            <Stack.Screen name="Akun" component={Akun} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainRoutes

const styles = StyleSheet.create({})