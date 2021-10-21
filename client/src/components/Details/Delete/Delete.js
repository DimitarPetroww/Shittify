import { useDispatch } from "react-redux"
import { deleteSongFromUser, loader, showAlert } from "../../../actions"
import { useHistory } from "react-router-dom"
import "./Delete.css"

const Delete = ({ close, name, deleteRequest, updateUserInfoAction }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const deleteSong = () => {
        dispatch(loader())

        deleteRequest()
            .then(res => {
                dispatch(updateUserInfoAction(res._id))
                dispatch(loader())
                history.push("/")
            })
            .catch(e => {
                dispatch(loader())
                dispatch(showAlert(e.message))
            })
    }

    return (
        <section className="delete-wrapper">
            <div className="delete-content">
                <div className="delete-text">
                    <h1 className="delete-heading">Are you sure you want to delete "{name}"?</h1>
                    <div className="edit-btns">
                        <button className="yes" onClick={deleteSong}>Delete</button>
                        <button className="no" onClick={close}>Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Delete