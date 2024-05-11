import './About.css';
import Mintu_DP from '../../assets/Mintu_DP.png'
// import { ExternalLink } from 'react-external-link';
// import {Link} from "react-scroll"
import Resume from "../../assets/Resume.pdf"; 


function About(){
    return(
        <div className='about'>
            <div className='img'>
                <img src={Mintu_DP} alt="Mintu_DP" className='aboutimg' />
            </div>
            <div className="aboutsection">
                <div className="aboutheading">
                    <h1>About</h1>
                </div>
                <div className="headingh3about">
                    <h3>An engineering student with major in Computer Science and Engineering and a major inclination towards Competitive Programming and Web Development. I love exploring new and upcoming technologies. I'm also adapt at motivating others, Passionate about food and code.</h3>
                </div>
                <div className="para1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, a., ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsa explicabo dolorem aliquam incidunt fuga magni expedita autem reprehenderit eos?
                </div>
                <div className="btnabout">
                    <a href={Resume} target="_blank">
                    <button className='downloadbtn'>View Resume</button>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default About