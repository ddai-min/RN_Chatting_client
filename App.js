import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInIndex from './src/LogIn/LogInIndex';
import Hello from './src/Hello/Hello';
import Category from './src/Category/Category';
import FriendIndex from './src/Friend/FriendIndex';

// import { StoreProvider } from './context/storeContext';
// import { useSocket } from './websocket';

const Stack = createStackNavigator();

// export const WebsocketContext = React.createContext({
//     handleWebsocketClose: () => { }
// })

export default function App() {
    // const { handleWebsocketClose } = useSocket()
    // const value = React.useMemo(() => ({ handleWebsocketClose }), [handleWebsocketClose])

    return (
        // <StoreProvider>
        //     <WebsocketContext.Provider value={value}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Hello"
                        screenOptions={{
                            headerShown: false
                        }}>
                        <Stack.Screen name="Hello" component={Hello}></Stack.Screen>
                        <Stack.Screen name="LogInIndex" component={LogInIndex}></Stack.Screen>
                        <Stack.Screen name="Category" component={Category}></Stack.Screen>
                        <Stack.Screen name="FriendIndex" component={FriendIndex}></Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
        //     </WebsocketContext.Provider>
        // </StoreProvider>
    );
}