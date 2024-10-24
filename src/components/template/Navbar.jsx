import { NavLink } from 'react-router-dom';
import s from '../../styles/template/navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.desktopNavbar}>
                <p className={s.navtext}>
                    Навигация
                </p>
                <NavItems />
            </div>
            <div className={s.mobileNavbar}>
                <p className={s.navtext}>
                    Навигация
                </p>
                <button className={s.openMobileNavbarBtn}>
                    Раскрыть
                </button>
            </div>
        </div>
    )
}

export default Navbar;

const NavItems = () => {
    return (
        <ul className={s.navitemsWrapper}>
            <li className={s.navitem}>
                <NavLink to={'/'} className={s.navitemLink}>
                    Главная
                </NavLink>
            </li>
            <li className={s.navitem}>
                <NavLink to={'/about'} className={s.navitemLink}>
                    Сведения об образовательной организации
                </NavLink>
            </li>
            <li className={s.navitem}>
                <NavLink to={'/news'} className={s.navitemLink}>
                    Новости
                </NavLink>
            </li>
        </ul>
    )
}