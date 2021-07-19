import React, {useReducer} from 'react';

import ListIndex from './List/ListIndex';
import ChatIndex from './Chat/ChatIndex';
import RecommendIndex from './Recommend/RecommendIndex';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';



const Tab=createBottomTabNavigator();

export default function index() {
    return (
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if(route.name==="친구 목록"){
                    iconName=focused ? 'people' : 'people-outline';
                }
                else if(route.name==="채팅 목록"){
                    iconName=focused ? 'chatbubbles' : 'chatbubbles-outline';
                }
                else if(route.name==="친구 추천 목록"){
                    iconName=focused ? 'person-add' : 'person-add-outline';
                }

                return <Icon name={iconName} size={size} color={color}></Icon>;
            },
        })}
        tabBarOptions={{
            activeTintColor:'black',
            inactiveTintColor:'gray'
        }}>
            <Tab.Screen name="친구 목록" component={ListIndex}></Tab.Screen>
            <Tab.Screen name="채팅 목록" component={ChatIndex}></Tab.Screen>
            <Tab.Screen name="친구 추천 목록" component={RecommendIndex}></Tab.Screen>
        </Tab.Navigator>
    );
}