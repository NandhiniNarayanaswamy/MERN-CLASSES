import logo from "../assests/logo.webp"
function Header() {
    return (
        <>
            <header style={{ grid: "2" }}>
                <img src={logo} alt="logo" style={{ widh: "10px", height: "50px" }} />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header