
import { Link, Outlet } from "react-router-dom"
function KidsWear() {
    return (
        <>
            <h2> Welcome to KidsWear page </h2>
            <nav>
                <Link to="boyBabyWear">BoyBabyWear</Link>
                <Link to="girlBabyWear">GirlBabyWear</Link>
                <Link to="toys">Toys</Link>
            </nav>
            <Outlet />
            {/* we are going to use outlet to display the nested routes
            1. What is <Outlet />?
            <Outlet /> is a placeholder component provided by React Router.
            It tells React Router “render the child route’s component here”.
            Without <Outlet />, child routes (like your BoyBabyWear, GirlBabyWear, Toys) will never show up inside their parent (KidsWear). */}
        </>
    )
}
export default KidsWear