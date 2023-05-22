import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairing';
import DeliverySceen from './screens/DeliverySceen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
                <Stack.Screen name="OrderPrepairing" options={{ presentation: 'fullScreenModal' }} component={OrderPrepairing} />
                <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal' }} component={DeliverySceen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})