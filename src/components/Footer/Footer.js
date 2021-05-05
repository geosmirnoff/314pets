import style from './Footer.module.css'

const Footer =() => {
    return (
        <footer className={style.footer}>
            <p className={style.copy}><a href="https://instagram.com/geogoshan" target="blank">@geogoshan</a> &copy; 2021</p>
        </footer>
    );
}

export default Footer;