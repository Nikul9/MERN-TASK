export const initialState1 = null; 

export const reducer1 = (state , action)  => {
    if(action.type === "NAV_BAR") {
        return action.payload;
    } 
    return state
}