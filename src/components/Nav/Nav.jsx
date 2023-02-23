import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

function Nav () {
    return(
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.link}>
                    <NavLink to="/profile" className={navData=>navData.isActive ? style.active:style.link}>Profile</NavLink>
                </li>
                <li className={style.link}>
                    <NavLink to="/dialogs" className={navData=>navData.isActive ? style.active:style.link}>Dialogs</NavLink>
                </li>
                <li className={style.link}>
                    <NavLink to="/news" className={navData=>navData.isActive ? style.active:style.link}>News</NavLink>
                </li>
                <li className={style.link}>
                    <NavLink to="/music" className={navData=>navData.isActive ? style.active:style.link}>Music</NavLink>
                </li>
                <li className={style.link}>
                    <NavLink to="/settings" className={navData=>navData.isActive ? style.active:style.link}>Settings</NavLink>
                </li>
                <li className={style.link}>
                <NavLink to="/friends" className={navData=>navData.isActive ? style.active:style.link}>Friends</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;