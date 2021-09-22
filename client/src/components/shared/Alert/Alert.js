import "./Alert.css"
import { ReactComponent as Close } from "../../../svg/close.svg"
import { useDispatch } from "react-redux"
import { clearAlert } from "../../../actions"

function Alert({ msg }) {
    const dispatch = useDispatch()

    return (
        <div class="alert">
            <span class="icon">
                <Close />
            </span>
            <div class="text">
                <strong>Error</strong>
                <p>{msg}</p>
            </div>
            <button class="close" onClick={() => dispatch(clearAlert())}>
                <Close />
            </button>

        </div>
    )
}

export default Alert
