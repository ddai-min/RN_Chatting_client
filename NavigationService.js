import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function reset(index, actions) {
    const resetAction = StackActions.reset({
        index: 0,
        actions
    });
    _navigator.dispatch(resetAction);
}

export default {
    reset,
    setTopLevelNavigator
};