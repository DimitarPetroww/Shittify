import "./Edit.css"
import { ReactComponent as Close } from "../../../svg/close.svg"

const Edit = ({ close }) => {
    return (
        <section className="edit-wrapper">
            <div className="edit-content">
                <div className="edit-text">
                    <h1 className="edit-heading">Edit "Аромат на барут"</h1>
                    <span className="close" onClick={close}>
                        <Close />
                    </span>
                </div>
                <div className="edit-form-container">
                    <form className="edit-form" onSubmit={(e) => {
                        e.preventDefault()
                        close()
                    }}>
                        <input type="text" defaultValue="Аромат на барут" className="edit-error-input" />
                        <span className="edit-error">Name</span>
                        <input type="submit" value="Save" />
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Edit