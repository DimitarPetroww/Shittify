import "./ProfileMenu.css"

const ProfileMenu = ({ click, isClicked }) => {

    return (
        <div className="profile-menu" onClick={click}>
            <figure className="profile-menu-icon">
                {/* <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" /></svg> */}
                <img src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
            </figure>
            <p className="profile-menu-name">dimitar.petroww</p>
            <div className={isClicked ? "profile-menu-arrow-downside" : "profile-menu-arrow"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                    <g transform="translate(-2, -3)">
                        <path d="M12 21l-12-18h24z" fill="currentColor" />
                    </g>
                </svg>
            </div>
        </div>
    )
}
export default ProfileMenu