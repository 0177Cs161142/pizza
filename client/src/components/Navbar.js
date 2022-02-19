import Recat from 'react';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  shadow p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="#">SHY PIZZA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;