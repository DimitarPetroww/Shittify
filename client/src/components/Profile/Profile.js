import "./Profile.css"

const Profile = () => {
    return (
        <section className="profile-wrapper">
            <div className="profile-container">
                <article className="profile-picture-container">
                    <div className="no-picture">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#7B7B7B"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z" /></svg>
                    </div>
                    {/* <div className="profile-picture">
                        <img src="https://images.unsplash.com/photo-1626033190220-9b6aa500d49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                    </div> */}
                </article>
                <article className="profile-data">
                    <h4 className="profile-heading">Profile</h4>
                    <h1 className="profile-name">Dimitar.Petroww</h1>
                    <p className="profile-playlists-count">9 playlists</p>
                </article>
            </div>
        </section>
    )
}

export default Profile