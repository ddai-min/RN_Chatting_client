import React, { useReducer } from 'react';
import LogIn from './LogIn';
import Membership from './Membership'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LogInIndex() {
    return (
        <Stack.Navigator initialRouteName="LogIn"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LogIn" component={LogIn}></Stack.Screen>
            <Stack.Screen name="Membership" component={Membership}></Stack.Screen>
        </Stack.Navigator>
    );
}