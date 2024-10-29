import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

function Footer() {
  const date = new Date();

  return (
    <footer>

      <p>Copyright &copy; {date.getFullYear()}</p>

      <div className="footer-icons">
        <a href="https://github.com/IzzyFigueroa" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/izzy-figueroa-466823300/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/izzyyfig?lang=en" target="_blank" rel="noopener noreferrer">
          <BsTwitterX size={30} />
        </a>
      </div>

      <p>Designed & Developed By Izzy Figueroa</p>
    </footer>
  )
}

export default Footer;