import { NavLink } from 'react-router-dom';
import nav_item from './NavItem.module.css';

const NavItem = (props) => {

    /*let item_style = nav_item.item;

    if (props.item_style === "active") {

        item_style = `${nav_item.item} ${nav_item.active}`;
    }*/

    return (
        <li className={nav_item.item}><NavLink to={props.link} activeClassName={nav_item.active}>{props.item}</NavLink></li>
    );
}

export default NavItem;