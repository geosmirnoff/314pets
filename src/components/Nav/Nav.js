import nav from './Nav.module.css';
import NavItem from './NavItem';

const Nav = () => {
    return (
        <nav className={nav.nav}>
            <ul className={nav.nav_list}>
                {/* Применяем несколько классов с помощью ШАБЛОННЫХ СТРОК: */}
                {/* <li className={`${nav.item} ${nav.active}`}><a href="#s">Профиль</a></li>
                <li className={nav.item}><a href="#s">Друзья</a></li>
                <li className={nav.item}><a href="#s">Сообщения</a></li>
                <li className={nav.item}><a href="#s">Фотографии</a></li> */}
                <NavItem item="Профиль" link="/profile" item_style="active" />
                <NavItem item="Друзья" link="/friends" />
                <NavItem item="Сообщения" link="/chats" />
                <NavItem item="Фотографии" link="/photo" />
            </ul>
        </nav>
    );
}

export default Nav;