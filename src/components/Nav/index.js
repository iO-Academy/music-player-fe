import {
    Link
} from "react-router-dom";

function Nav() {
    return (
        <aside className="light-blue col-1 h-100 border-end">
            <nav className="h-100 d-flex flex-column justify-content-evenly align-items-center">
                <p><Link to="/" className="bi bi-house"></Link></p>
                <p><i className="bi bi-search"></i></p>
                <p><i className="bi bi-bookmark-heart"></i></p>
                <p><i className="bi bi-gear"></i></p>
            </nav>
        </aside>
    );
}

export default Nav;
