import "./EditModal.css"
import { ReactComponent as Close } from "../../../svg/close.svg"

const EditModal = ({ close, username }) => {
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
                    <form className="edit-modal-form" onSubmit={(e) => {
                        e.preventDefault()
                        close()
                    }}>
                        <input type="text" defaultValue={username} className="name-error-input" />
                        <span className="error-span">Name</span>
                        <input type="submit" value="Save" />
                    </form>
                </div>
            </div>
        </section>
    )
}
export default EditModal