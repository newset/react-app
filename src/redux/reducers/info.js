import ActionType from '../actions/ActionType';

export default (state, action) => {
    switch (action.type) {
        case ActionType.GET_INFO:
            return action.payload;
        default:
            return state;
    }
};
