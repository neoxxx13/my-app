import style from './Header.module.css';

const Header = () => {
    return(
        <header className={style.header}>
        <img src="https://v.od.ua/uploads/92/logo.png" alt="лого" />
        </header>
    );
}

export default Header;