export const initialState = false;

export const reducer = (state, action) => {
    if(action.type === "DROP"){
        return action.payload;
    }
    return state;
}