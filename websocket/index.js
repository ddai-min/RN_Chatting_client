import React, { useContext, useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-native-use-websocket';
import { StoreContext } from '../context/storeContext';

export const useSocket = () => {
    const { actions } = useContext(StoreContext)

    const [socketUrl] = useState("ws://localhost:3000");
    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(socketUrl, {
        shouldReconnect: (closeEvent) => true,
        reconnectAttempts: 10,
        reconnectInterval: 5000,
    });

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    useEffect(() => {
        if (!lastMessage || !lastMessage.data) {
            return
        } else {
            actions.msgActions.WebsocketReceiveData(lastMessage.data)
        }
    }, [lastMessage])

    useEffect(() => {
        if (connectionStatus === 'Open') {
            actions.msgActions.WebsocketUpdateWriter(sendMessage)
            console.log('opened');
        } else {
            console.log('is open ?');
        }
    }, [connectionStatus])

    const handleWebsocketClose = useCallback(() => {
        getWebSocket().close()
    }, []);

    return { sendMessage, lastMessage, readyState, getWebSocket, handleWebsocketClose }
}