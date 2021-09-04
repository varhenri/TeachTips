import { postNewTip } from '../api';

const initialState = {
    tips: [{
        title: "Tip 1",
        text: "Tip 1 text"
    }]
};

export function tipReducer(state = initialState, action){
    switch(action.type)
    {
        case ADD_TIP:
            return {...state, tips: [...state.tips, action.payload]};
        case "tip/tipsReceived":
            return {...state, tips: action.payload};
        default:
            return state;
    }
}

//selectors
export const getTips = state => state.tip.tips;

//action types
export const ADD_TIP = "tip/addTip";


//action creators
export function addTip(tip){
    return function addTipThunk(dispatch){
        dispatch({
            type: ADD_TIP,
            payload: tip
        }); 
        postNewTip(tip).then((tips) => {
            dispatch({
                type: "tip/tipsReceived",
                payload: tips
            });
        });
    }
}