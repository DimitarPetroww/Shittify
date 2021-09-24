import "./Alert.css"
import { ReactComponent as Close } from "../../../svg/close.svg"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearAlert } from "../../../actions"

function Alert({ msg }) {
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() =>
            dispatch(clearAlert()),
            3000);
        return () => clearTimeout(timer);
    }, [alert.shown]);

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
