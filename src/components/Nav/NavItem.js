import { NavLink } from 'react-router-dom';
import style from './NavItem.module.css';

const NavItem = (props) => {

    /*let item_style = nav_item.item;

    if (props.item_style === "active") {

        item_style = `${nav_item.item} ${nav_item.active}`;
    }*/

    return (
        <li className={style.item}><NavLink to={props.link} activeClassName={style.active}>{props.item}</NavLink></li>
    );
}

export default NavItem;