import './Projects.css';
import portfolio from '../../assets/portfolio.png';
import ecommerce from '../../assets/ecommerce.png'

function Projects(){
    return(
        <div className='projects'>
            <div className="headingproject">
                <h1>My Projects</h1>
            </div>
            <div className="projects1">
                <div className="box1">
                    <div className="headingpr1">
                        <h3>Portfolio</h3>
                    </div>
                    <img src={portfolio} alt="PORTFOLIO" className='portfolioimg' />
                    <p>Passionate creator dedicated to delivering innovative and impactful solutions through meticulous design and development in my portfolio project.</p>
                </div>
                <div className="box1">
                    <div className="headingpr2">
                        <h3>Ecommerce App</h3>
                    </div>
                    <img src={ecommerce} alt="Ecommerce" className='ecommercepng' />
                    <p>Designed and implemented innovative e-commerce solutions, optimizing user experience and increasing sales conversion rates for an online retail project.</p>
                </div>
                <div className="box1">
                    <div className="headingpr3">
                        <h3>Amazon Clone</h3>
                    </div>
                    <img src="https://imgs.search.brave.com/GHUZaTgxyoT9NyHz73mFmhkA4zaBL16Ff2m-Lb9C6mw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMw/NjI5MTMyNDQyL0Ft/YXpvbi1sb2dvLTEw/MjR4NjkwLmpwZw" alt="Amazon" className='amazonimg' />
                    <p>This project is a clone of amazon based on react.js where users can add products to their cart and do the checkout of the products. This project has full stripe integration for handling payments. The authentication is being handled by firebase</p>
                </div>
            </div>
        </div>
    )
}

export default Projects