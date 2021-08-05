import {PROFILE_TOGGLE_SHOW} from "./actionTypes";

const initialState = {
    show: false,
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case (PROFILE_TOGGLE_SHOW):{
            return {
                ...state,
                show: !state.show
            }
        }
        default:
            return state;
    }
}