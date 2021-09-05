import { SatelliteTwoTone } from '@material-ui/icons';
import { postNewTip, getTipsList } from '../api';

const initialState = {
    isLoading: false,
    searchParameter: "",
    filteredTips: [],
    tips: []
};

export function tipReducer(state = initialState, action){
    switch(action.type)
    {
        case ADD_TIP_PENDING:
            return {...state, isLoading: true};
        case ADD_TIP_SUCCESS:
            return {...state, tips: action.payload, isLoading: false};
        case ADD_TIP_FAILURE:
            return {...state, isLoading: false};
        case GET_TIPS_PENDING:
            return {...state, isLoading: true};
        case GET_TIPS_SUCCESS:
            return {...state, tips: action.payload, isLoading: false};
        case GET_TIPS_FAILURE:
            return {...state, isLoading: false};
        case CHANGE_SEARCH_PARAM:{
            return {...state, searchParameter: action.payload};
        }
        default:
            return state;
    }
}

//selectors
export const getTips = (state) => {
    if(state.tip.searchParameter.length === 0)
    {
        return state.tip.tips;
    }
    const searchFilterCondition = (value) => {
        return value.tipText.includes(state.tip.searchParameter) ||
        value.tipTitle.includes(state.tip.searchParameter);
    }

    return state.tip.tips.filter(value => searchFilterCondition(value));
};

export const getSearchParam = state => state.tip.searchParameter;
export const getIsLoading = state => state.tip.isLoading;

//action types
export const ADD_TIP_PENDING = "tip/addTipPending";
export const ADD_TIP_SUCCESS = "tip/addTipSuccess";
export const ADD_TIP_FAILURE = "tip/addTipFailure";

export const GET_TIPS_PENDING = "tip/getTipsPending";
export const GET_TIPS_SUCCESS = "tip/getTipsSuccess";
export const GET_TIPS_FAILURE = "tip/getTipsFailure";

export const CHANGE_SEARCH_PARAM = "tip/changeSearchParam";

//action creators
export function changeSearchParam(param){
    return function changeSearchParamThunk(dispatch){
        dispatch({
            type: CHANGE_SEARCH_PARAM,
            payload: param
        });
    }
}

export function addTip(tip){
    return function addTipThunk(dispatch){
        dispatch({
            type: ADD_TIP_PENDING,
            payload: tip
        }); 
        postNewTip(tip).then(result => {
            dispatch({
                type: ADD_TIP_SUCCESS,
                payload: result.data
            });
        },
        rejected => {
            dispatch({
                type: ADD_TIP_FAILURE
            })
        });
    }
}

export function getTipsData(){
    return function getTipsDataThunk(dispatch){
        dispatch({
            type: GET_TIPS_PENDING
        }); 
        getTipsList().then(result => {
            dispatch({
                type: GET_TIPS_SUCCESS,
                payload: result.data
            });
        },
        rejected => {
            dispatch({
                type: GET_TIPS_FAILURE
            })
        });
    }
}

//thunks
export function getInitialTipsData(dispatch){
    dispatch(getTipsData());
}