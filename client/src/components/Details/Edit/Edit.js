import "./Edit.css"
import { ReactComponent as Close } from "../../../svg/close.svg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loader } from "../../../actions"

const Edit = ({ close, name }) => {
    const [errorClass, setErrorClass] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        const { value } = e.target.name
        if (value === "") return setErrorClass("edit-error-input")
        dispatch(loader())

    }
    return (
        <section className="edit-wrapper">
            <div className="edit-content">
                <div className="edit-text">
                    <h1 className="edit-heading">Edit "{name}"</h1>
                    <span className="close" onClick={close}>
                        <Close />
                    </span>
                </div>
                <div className="edit-form-container">
                    <form className="edit-form" onSubmit={submitHandler}>
                        <input type="text" defaultValue={name} className={errorClass} name="name" />
                        {errorClass ? <span className="edit-error">Name</span> : ""}
                        <input type="submit" value="Save" />
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Edit