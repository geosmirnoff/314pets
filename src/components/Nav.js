import nav from './Nav.module.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className={nav.nav_list}>
                {/* Применяем несколько классов с помощью ШАБЛОННЫХ СТРОК: */}
                <li className={`${nav.item} ${nav.active}`}><a href="#s">Профиль</a></li>
                <li className={nav.item}><a href="#s">Друзья</a></li>
                <li className={nav.item}><a href="#s">Сообщения</a></li>
                <li className={nav.item}><a href="#s">Фотографии</a></li>
            </ul>
        </nav>
    );
}

export default Nav;