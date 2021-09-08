import React, { useReducer } from 'react';
import Chat from './Chat';
import ChatDetail from './ChatDetail';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ChatIndex() {
    return (
        <Stack.Navigator initialRouteName="Chat"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
            <Stack.Screen name="ChatDetail" component={ChatDetail}></Stack.Screen>
        </Stack.Navigator>
    );
}