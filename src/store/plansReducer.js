export const SHOW_PLANS = "SHOW_PLANS";
export const ADD_PLAN = "ADD_PLAN";
export const EDIT_PLAN = "EDIT_PLAN";
export const REMOVE_PLAN = "REMOVE_PLAN";

const defaultState = [];

export const plansReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_PLANS:
            return;
        case ADD_PLAN:
            return;
        case EDIT_PLAN:
            return;
        case REMOVE_PLAN:
            return;
        default:
            return state;
    }
}