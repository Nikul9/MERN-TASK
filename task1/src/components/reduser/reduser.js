export const initialState = null; 

export const reducer = (state , action)  => {
    if(action.type === "PRODUCT_ID") {
        return action.payload;
    }
    if(action.type === "USER_ID") {
        return action.payload;
    }
    if(action.type === "NAV_BAR") {
        return action.payload;
    }
    return state
}