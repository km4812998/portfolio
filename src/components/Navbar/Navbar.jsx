import  "./Navbar.css"
import {Link} from "react-scroll";

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <h1 className="logoh1">M<span>intu</span></h1>
            </div>
            <div className="listItems">
                <Link activeClass="active"to="herosection"spy={true}smooth={true}offset={-100}duration={500}className="list">Home</Link>
                <Link activeClass="active"to="about"spy={true}smooth={true}offset={-100}duration={500}className="list">About Us</Link>
                <Link activeClass="active"to="Skills"spy={true}smooth={true}offset={-100}duration={500}className="list">Skills</Link>
                <Link activeClass="active"to="projects"spy={true}smooth={true}offset={-100}duration={500}className="list">Projects</Link>
            </div>
            <div className="btnNav">
                <button className="btn" onClick={()=>{
                    const contactSection =document.getElementsByClassName("contact")[0];
                    if(contactSection){
                        contactSection.scrollIntoView({behavior:"smooth"})
                    }
                }}>Contact Me</button>
            </div>
        </div>
    )
}
export default Navbar