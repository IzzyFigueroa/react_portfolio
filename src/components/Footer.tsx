function Footer() {
const date = new Date();

    return (
        <footer>
            <p>Copyright &copy; {date.getFullYear()}</p>
            <p>Designed & Developed By Izzy Figueroa</p>
        </footer>
    )
}

export default Footer;