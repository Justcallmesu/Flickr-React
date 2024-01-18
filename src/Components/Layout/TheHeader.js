import Logo from "../../Assets/Logo.png";

function TheHeader() {
    return (
        <nav className="navbar bg-[#212529]">
            <div className="container-fluid">
                <a className="navbar-brand flex gap-2 items-center">
                    <img src={Logo} alt="Logo" width="25" height="20" class="d-inline-block align-text-top" />
                    <h2 className="text-white m-0">Find Images</h2>
                </a>
            </div>
        </nav>
    )
}

export default TheHeader;