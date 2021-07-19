import React, {useReducer} from 'react';
import LogInIndex from './src/LogIn/LogInIndex';
import Hello from './src/Hello/Hello';
import Category from './src/Category/Category';
import FriendIndex from './src/Friend/FriendIndex';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Hello"
            screenOptions={{headerShown:false}}>
                <Stack.Screen name="Hello" component={Hello}></Stack.Screen>
                <Stack.Screen name="LogInIndex" component={LogInIndex}></Stack.Screen>
                <Stack.Screen name="Category" component={Category}></Stack.Screen>
                <Stack.Screen name="FriendIndex" component={FriendIndex}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}