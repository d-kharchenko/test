import {SET_CALLBACK} from '../actions/actionCallback'

export default function callback(state = [], action = {}) {
    switch (action.type){
        case SET_CALLBACK:
            return [
                ...state,
                action.callback
            ];
        default: return state
    }

};