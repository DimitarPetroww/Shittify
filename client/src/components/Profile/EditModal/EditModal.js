import "./EditModal.css"
import { ReactComponent as Close } from "../../../svg/close.svg"

import { showAlert } from "../../../actions"
import * as userService from "../../../services/user"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loader, rename } from "../../../actions"

const EditModal = ({ close, username }) => {
    const dispatch = useDispatch()
    const [errorClass, setErrorClass] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const { value } = e.target.username
        if (value === "") return setErrorClass("name-error-input")
        dispatch(loader())
        userService.rename(value)
            .then(username => {
                dispatch(rename(username))
                dispatch(loader())
                close()
            })
            .catch(e => {
                dispatch(showAlert(e.message))
                dispatch(loader())
            })
    }

    return (
        <section className="edit-modal-wrapper">
            <div className="edit-modal-content">
                <div className="edit-modal-text">
                    <h1 className="edit-modal-heading">Edit Profile</h1>
                    <span className="close-modal" onClick={close}>
                        <Close />
                    </span>
                </div>
                <div className="edit-modal-form-container">
                    <form className="edit-modal-form" onSubmit={submitHandler}>
                        <input type="text" defaultValue={username} className={errorClass} name="username" />
                        {errorClass !== "" ? <span className="error-span">Name</span> : ""}
                        <input type="submit" value="Save" />
                    </form>
                </div>
            </div>
        </section>
    )
}
export default EditModal