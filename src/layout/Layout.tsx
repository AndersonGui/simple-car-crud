import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export default function Layout() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    function checkIsActiveLink(isActive: boolean) {
        return isActive ? "active" : '';
    }

    return (
        <div className="dashboard">
            <nav>
                <div className="nav-start">
                    <img style={{ cursor: 'pointer' }} onClick={() => {
                        navigate('/');
                    }} className="logo-header" alt="Logo Ânderson Guimarães Soares" src="./images/logo-anderson-guimaraes.png"></img>

                    <hr />

                    <ul className="nav-items">
                        <li>
                            <NavLink className={({ isActive }) =>
                                checkIsActiveLink(isActive)
                            } to={"/ManageCar"}>Gerenciar Carros</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="nav-items">
                        <li style={{ cursor: 'pointer' }} onClick={() => {
                            logout();
                        }}>
                            Sair
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}