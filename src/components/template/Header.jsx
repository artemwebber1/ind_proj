import s from '../../styles/template/header.module.css'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.headerContent}>
                    <img className={s.logo} src={logo} alt="logo" />
                    <p className={s.text}>
                        Средняя общеобразовательная школа № 43 с углубленным изучением отдельных предметов
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;