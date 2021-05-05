import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.img} src="https://06edkm734f-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/logo-placeholder.png" alt="header img" />
        </header>
    );
}

export default Header;