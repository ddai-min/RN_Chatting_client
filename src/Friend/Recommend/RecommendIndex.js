import React, { useReducer } from 'react';
import Recommend from './Recommend';
import RecommendDetail from './RecommendDetail';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function RecommendIndex() {
    return (
        <Stack.Navigator initialRouteName="Recommend"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Recommend" component={Recommend}></Stack.Screen>
            <Stack.Screen name="RecommendDetail" component={RecommendDetail}></Stack.Screen>
        </Stack.Navigator>
    );
}