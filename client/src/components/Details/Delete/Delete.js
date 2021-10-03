import "./Delete.css"

const Delete = ({ close, name }) => {
    return (
        <section className="delete-wrapper">
            <div className="delete-content">
                <div className="delete-text">
                    <h1 className="delete-heading">Are you sure you want to delete "{name}"?</h1>
                    <div className="edit-btns">
                        <button className="yes" onClick={close}>Delete</button>
                        <button className="no" onClick={close}>Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Delete