import './Contact.css';

function Contact(){
    return(
        <div className='contact'>
            <div className="contactheading">
                <h1>Contact Me</h1>
            </div>
            <div className="content">
                <h3>Please fill out the form to contact me</h3>
            </div>
            <form>
                <input type="text"className='input1' placeholder='Your Name'/>
                <br />
                <input type="number" className='input2' placeholder='Your Number'/>
                <br />
                <textarea placeholder='Your Message' className='text' cols="50" rows="5"></textarea>
                <br />
                <button className='submitbtn'>Submit</button>
            </form>
        </div>
    )
}
export default Contact