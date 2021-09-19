const authReducer = (state = null, action) => {
    switch(action.type) {
        case "SIGN_IN":
            return action.payload
        case "SIGN_OUT":
            return null
        case "SET_PHOTO":
            return {...state, photoUrl: action.payload}
        case "CHANGE_NAME":
            return {...state, username: action.payload}
        default:
            return state
    }
}
export default authReducer