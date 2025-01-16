import { Outlet, Link } from "react-router-dom";

export default function NavBar(){
return(
    <>
    <nav>
        <Link to ="/lib/index.html">Home</Link>
        <Link to ="/lib/eductaion">eductaion</Link>
        <Link to ="/lib/codingLanagaues">codingLanagaues</Link>
        <Link to ="/lib/contact">contact</Link>

    </nav>
    <Outlet></Outlet>
    </>
)
}
