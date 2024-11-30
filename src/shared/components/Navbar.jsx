import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav id='navbar-component' className="navbar navbar-light bg-light w-100 p-0">
            <div className="w-100">
                <ul className="navbar-menu">
                    <li>
                        <NavLink 
                            className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                            to='/items-list'
                        >
                            List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                            to='/historial'
                        >
                            Historial
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}