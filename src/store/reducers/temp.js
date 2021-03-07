export default (state = {}, action) => {
    switch (action.type) {
        case "SET_CREDENTIALS_LOADED": return { ...state, ...action.payload }
    }
    return state
}
