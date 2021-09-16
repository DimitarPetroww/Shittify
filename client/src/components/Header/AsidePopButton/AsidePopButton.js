import "./AsidePopButton.css"
import { ReactComponent as AsidePop } from "../../../svg/asidePop.svg";

const AsidePopButton = ({ click }) => {
    return (
        <div className="aside-pop-btn" onClick={click}>
            <AsidePop />
        </div>
    )
}

export default AsidePopButton