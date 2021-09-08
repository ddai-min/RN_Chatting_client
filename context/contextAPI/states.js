const logStates = {
    isLogin: false,
    isSignup: false,
}

const msgStates = {
    FRIENDS_ALL: [],
    TOPICS_ALL: [],
    TOPICS_MY: [],
}

const chatListStates = {
    createRoom: false,
    joinRoom: false,
    leaveRoom: false,
    inviteRoom: false,

    chatName: {
        id: 0,
        name: '',
    },
    list: [],
}

export const initialStates = {
    logStates,
    msgStates,
    chatListStates,
}