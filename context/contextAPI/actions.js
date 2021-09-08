import {
    IS_LOGIN,
    IS_SIGNUP,
    CREATE_ROOM,
    JOIN_ROOM,
    LEAVE_ROOM,
    INVITE_ROOM
} from './types';

const doLogin = (props, trueFalse) => {
    props.dispatch({
        type: IS_LOGIN,
        isLogin: trueFalse
    })
};

const doSignup = (props, trueFalse) => {
    props.dispatch({
        type: IS_SIGNUP,
        isSignup: trueFalse
    })
};

const doCreateRoom = (props, trueFalse, id, name, list) => {
    props.dispatch({
        type: CREATE_ROOM,
        createRoom: trueFalse,
        chatName: {
            id: id,
            name: name
        },
        list: list
    })
};

const doJoinRoom = (props, trueFalse) => {
    props.dispatch({
        type: JOIN_ROOM,
        joinRoom: trueFalse
    })
};

const doLeaveRoom = (props, trueFalse) => {
    props.dispatch({
        type: LEAVE_ROOM,
        leaveRoom: trueFalse
    })
};

const doInviteRoom = (props, trueFalse) => {
    props.dispatch({
        type: INVITE_ROOM,
        inviteRoom: trueFalse
    })
};

const chattingActions = (props) => {
    return {
        changeDoLogin: (trueFalse) => {
            doLogin(props, trueFalse);
        },
        changeDoSignup: (trueFalse) => {
            doSignup(props, trueFalse);
        },
        changeDoCreateRoom: (trueFalse, id, name, list) => {
            doCreateRoom(props, trueFalse, id, name, list);
        },
        changeDoJoinRoom: (trueFalse) => {
            doJoinRoom(props, trueFalse);
        },
        changeDoLeaveRoom: (trueFalse) => {
            doLeaveRoom(props, trueFalse);
        },
        changeDoInviteRoom: (trueFalse) => {
            doInviteRoom(props, trueFalse);
        },
    }
}

export const useActions = (state, dispatch) => {
    return {
        chattingActions: chattingActions({ state, dispatch }),
    }
};