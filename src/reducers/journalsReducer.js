const initialState = {
    journals: [],
    loading: true
}
const journalsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_JOURNALS":
            return {
                ...state,
                loading: false,
                journals: action.journals
            }
        case "ADD_JOURNAL":
            return {
                ...state,
                journals: [...state.journals, action.journal],
            }
        default: 
        return state;
    }

}

export default journalsReducer