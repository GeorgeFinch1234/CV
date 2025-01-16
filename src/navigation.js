import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav>
                <p>{'\u2630'}</p>
                <div className="menuList show">
                    <Link to="/lib/index.html" className="link">Home</Link>
                    <Link to="/lib/eductaion" className="link">eductaion</Link>
                    <Link to="/lib/codingLanagaues" className="link">codingLanagaues</Link>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
}
