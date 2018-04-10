import ActionType from '../actions/ActionType';

export default (state = {test: 1}, action) => {
    switch (action.type) {
        case ActionType.GET_INFO:
            return action.payload;
        default:
            return state;
    }
};
