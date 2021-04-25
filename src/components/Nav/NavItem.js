import nav_item from './NavItem.module.css';

const NavItem = (props) => {

    let item_style = nav_item.item;

    if (props.item_style === "active") {

        item_style = `${nav_item.item} ${nav_item.active}`;
    }

    return (
        <li className={item_style}><a href={props.link}>{props.item}</a></li>
    );
}

export default NavItem;