import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
     function menu() {
        // toggles all the menus for me.
       
    
            document.querySelector(`nav div`).classList.toggle(`show`);
    
        
    }
    return (
        <>
            <nav>
                <p id='menuIcon' onClick={menu}>{'\u2630'}</p>
                <div className="menuList">
                    <Link to="/lib/index.html" className="link">Home</Link>
                    <Link to="/lib/eductaion" className="link">eductaion</Link>
                    <Link to="/lib/codingLanagaues" className="link">codingLanagaues</Link>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
}
