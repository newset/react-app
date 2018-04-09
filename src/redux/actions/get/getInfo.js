import ActionType from '../ActionType';

export function getInfo(data) {
    return {
        type: ActionType.GET_INFO,
        payload: data,
    };
}