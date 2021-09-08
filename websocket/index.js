import React, { useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-native-use-websocket';
import { StoreContext } from '../context/storeContext';

export const useSocket = () => {
    const { actions } = React.useContext(StoreContext)

    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket('ws://localhost:8000', {
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