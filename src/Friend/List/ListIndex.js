import React, {useReducer} from 'react';
import List from './List';
import ListDetail from './ListDetail';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ListIndex() {
    return (
        <Stack.Navigator initialRouteName="List"
        screenOptions={{headerShown:false}}>
            <Stack.Screen name="List" component={List}></Stack.Screen>
            <Stack.Screen name="ListDetail" component={ListDetail}></Stack.Screen>
        </Stack.Navigator>
    );
}