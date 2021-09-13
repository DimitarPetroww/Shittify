import "./Edit.css"

const Edit = ({ close }) => {
    return (
        <section className="edit-wrapper">
            <div className="edit-content">
                <div className="edit-text">
                    <h1 className="edit-heading">Edit "Аромат на барут"</h1>
                    <span className="close" onClick={close}>
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M14.354 2.353l-.708-.707L8 7.293 2.353 1.646l-.707.707L7.293 8l-5.647 5.646.707.708L8 8.707l5.646 5.647.708-.708L8.707 8z"></path></svg>
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