import footer from './Footer.module.css'

const Footer =() => {
    return (
        <footer className={footer.footer}>
            <p className={footer.copy}><a href="https://instagram.com/geogoshan" target="blank">@geogoshan</a> &copy; 2021</p>
        </footer>
    );
}

export default Footer;