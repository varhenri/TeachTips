const initialState = {
    categories: [{
        Id: 1,
        name: "First category"
    }]
};

export function categoryReducer(state = initialState, action){
    switch(action.type)
    {
        default:
            return state;
    }
}