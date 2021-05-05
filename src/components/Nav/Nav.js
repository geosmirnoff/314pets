import style from './Nav.module.css';
import NavItem from './NavItem';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav_list}>
                {/* Применяем несколько классов с помощью ШАБЛОННЫХ СТРОК: */}
                {/* <li className={`${nav.item} ${nav.active}`}><a href="#s">Профиль</a></li>
                <li className={nav.item}><a href="#s">Друзья</a></li>
                <li className={nav.item}><a href="#s">Сообщения</a></li>
                <li className={nav.item}><a href="#s">Фотографии</a></li> */}
                <NavItem item="Профиль" link="/profile" />
                <NavItem item="Чаты" link="/chats" />
                <NavItem item="Кореша-сучата" link="/friends" />
                {/* <NavItem item="Фотографии" link="/photo" /> */}
            </ul>
        </nav>
    );
}

export default Nav;