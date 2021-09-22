const alertReducer = (state = { shown: false }, action) => {
    switch (action.type) {
        case "SHOW_MESSAGE":
            return { shown: true, message: action.payload }
        case "CLEAR_MESSAGE":
            return { shown: false, message: "" }
        default:
            return state
    }
}
export default alertReducer