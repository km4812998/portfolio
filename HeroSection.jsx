import './HeroSection.css';
import mypics from '../../assets/mypics.jpg'
import { ExternalLink } from 'react-external-link';

function HeroSection(){
    return(
        <div className='herosection'>
            <div className="left">
                <div className="para">
                    <p>Web Developer ,</p>
                    <p>Competitive Programmer</p>
                </div>
                <div className="herosectionh1">
                    <h1>I'm <span>Mintu</span></h1>
                </div>
                <div className="stack">
                    <h1>Full Stack Developer</h1>
                </div>
                <div className="paracontent">
                    I am Skilled and Passionate Web Developer and Programmer  in creating visually appealing and user-friendly websites and problem -solving.
                </div>
                <div className="links">
                <ExternalLink href="https://www.facebook.com/profile.php?id=100076267603532">
                <img className='link' src="https://imgs.search.brave.com/C9qptyU5gGqePqh4MIC5NhRrxuXO-pDwFcyaMLzIacQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9GYWNlYm9v/ay1sb2dvLWJsdWUt/Y2lyY2xlLWxhcmdl/LXdoaXRlLWYucG5n" alt="Facebook" />
                </ExternalLink>
                <ExternalLink href="https://github.com/km4812998">
                <img className='link' src="https://imgs.search.brave.com/F7SBlHLkINi0eOUYeyAhXR80w4OHvqXX2fi1uN4Gnac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi01MTJ4NDk3/LW9wcHRocmUyLnBu/Zw" alt="GitHub" />
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/mintu-kumar-1426681b4/">
                <img className='link' src="https://imgs.search.brave.com/8LV4Ap0X-UwS1jj2YDffw5HzBGBsdpSAOInP5uKacW8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xpbmtlZGlu/LXBuZy1jaXJjbGUt/Y29sb3ItbGlua2Vk/aW4taWNvbi01MTIu/cG5n" alt="Linkedin" />
                </ExternalLink>
                <ExternalLink href="https://www.instagram.com/kumarmintu__?igsh=OWRpdmo2dHg0cmht">
                <img className='link' src="https://imgs.search.brave.com/CPW-dXqNcrUdqeRZWheTqRaaKRNoPjvyq1dTF6KrAR0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1ODU4NzMw/M2luc3RhZ3JhbS1w/bmcucG5n" alt="Instagram" />
                </ExternalLink>
                <ExternalLink href="https://leetcode.com/u/km4812998/">
                <img className='link' src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png" alt="Instagram" />
                </ExternalLink>
            </div>
            </div>
            <div className="right">
                <img src={mypics} alt="Mintu DP" className='mypics' />
            </div>
        </div>
    )
 
}


export default HeroSection