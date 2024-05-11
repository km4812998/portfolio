import './Skills.css';
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import tailwind from '../../assets/tailwind.png'


function Skills(){
    return(
        <div  className='Skills'>
            <div className="headingskills">
                <h1>My Skills</h1>
            </div>
            <div className="skills1">
                <div className="react">
                    <img src={react} alt="React JS Image"  className='reactimg'/>
                </div>
                <div className="html">
                    <img src={html} alt="HTML" className='htmlimg' />
                </div>
                <div className="tailwind">
                    <img src={tailwind} alt="" className='tailwindimg' />
                </div>
                <div className="cpp">
                    <img src="https://imgs.search.brave.com/u83zgPaxYxkGaK1WIFN0F4exm74kdThjIGMgMGkEAZ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pc29j/cHAub3JnL2ZpbGVz/L2ltZy9jcHBfbG9n/by5wbmc" alt="C++" className='cppimg'/>
                </div>
                <div className="java">
                    <img src="https://imgs.search.brave.com/ujP9IOX6k64YxZ-UCyYa5ae66jJUlSL04iBOll-KuTs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0phdmEtTG9nby01/MDB4MzEzLnBuZw" alt="java" className='javaimg' />
                </div>
                <div className="git">
                    <img src="https://imgs.search.brave.com/KXL45Ky6mn4L5JZiL_5V069ITX6UnIz6ZTlN8LGDJfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg" alt="git" className='gitimg' />
                </div>
            </div>
        </div>
    )
}
export default Skills 