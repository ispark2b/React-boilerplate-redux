import * as types from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}