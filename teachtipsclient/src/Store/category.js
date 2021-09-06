import { getAvailableCategories } from '../api';

const initialState = {
    isLoading: false,
    categories: []
};

export function categoryReducer(state = initialState, action){
    switch(action.type)
    {
        case GET_CATEGORIES_PENDING:
            return {...state, isLoading: true};
        case GET_CATEGORIES_SUCCESS:
            return {...state, categories: action.payload, isLoading: false};
        case GET_CATEGORIES_FAILURE:
            return {...state, isLoading: false};
        default:
            return state;
    }
}

//selectors
export const getCategories = state => state.category.categories;
export const getCategoriesForReactSelect = (state) => {
    return state.category.categories.map((value) => ({ value: value.id, label: value.name}));
}
export const getIsLoading = state => state.tip.isLoading;

export const GET_CATEGORIES_PENDING = "tip/getCategoriesPending";
export const GET_CATEGORIES_SUCCESS = "tip/getCategoriesSuccess";
export const GET_CATEGORIES_FAILURE = "tip/getCategoriesFailure";

export function getCategoriesData(){
    return function getCategoriesDataThunk(dispatch){
        dispatch({
            type: GET_CATEGORIES_PENDING
        }); 
        getAvailableCategories().then(result => {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: result.data
            });
        },
        rejected => {
            dispatch({
                type: GET_CATEGORIES_FAILURE
            });
        });
    }
}

//thunks
export function getInitialCategoriesData(dispatch){
    dispatch(getCategoriesData());
}