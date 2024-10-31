import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* <img src={logo} alt="logo" /> */}
            <h2 className="text-3xl">MB</h2>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/manikanta-boddu/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Manikanta-010" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/mani_kanta_567/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/ManiKan45471193" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a> 
            <a href="https://app.netlify.com/teams/manikantaboddu999/sites" target="_blank" rel="noopener noreferrer"><SiNetlify /></a> 
        </div>
    </nav>
  )
}

export default Navbar