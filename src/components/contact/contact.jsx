import React,{ useState }  from 'react'
import { MdOutlineEmail }from 'react-icons/md'
import { RiMessengerLine }from 'react-icons/ri'
import { BsWhatsapp }from 'react-icons/bs'
import { RxCross1 }from 'react-icons/rx'
import './contact.css'
import emailjs from 'emailjs-com';
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendEmail, setSendEmail] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      emailjs.send('service_mmem3dk', 'template_a6hx3z4', {
        from_name: name,
        from_email: email,
        message: message,
      }, '6cRsm1gS-r_Rnu2ez')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName('')
          setMessage('')
          setEmail('')
          setSendEmail(true)
        }, (err) => {
          console.log('FAILED...', err);
        });
    };
  return (
    <section id='contact'>
        <h5> Go In Touch</h5>
        <h2>Contact Me</h2>
        <div className={sendEmail?'d-show':'d-none'}>You mailed S M Ashikur Rahman Successfully ! 
        <RxCross1 className='show-close' onClick={()=>setSendEmail(false)}/></div>
        <div className='container contact_container'>
        
            <div className='contact_options'>
              <article className='contact_option'>    
                  <MdOutlineEmail/>
                  <h4>Email</h4>
                  <h5>ashikgbcse1@gmail.com</h5>
                  <a href='mailto:ashikgbcse1@gmail.com'>send a message </a>
              </article>   
              <article className='contact_option'>    
                  <RiMessengerLine/>
                  <h4>Messenger</h4>
                  <h5>S. M. Ashikur Rahman</h5>
                  <a href='https://m.me/ashikurashik.a/'>send a message </a>
              </article>     
              <article className='contact_option'>    
                  <BsWhatsapp/>
                  <h4>Messenger</h4>
                  <h5>S. M. Ashikur Rahman</h5>
                  <a href='whatsapp://send/?phone=8801755955821' target="_blank">send a message </a>
              </article>   
            </div>
             
            <form onSubmit={handleSubmit}>
              <input type="text"   placeholder='Your Full Name' required  value={name} onChange={(event) => setName(event.target.value)}/>
              <input type="email"  placeholder='Your Email' required  value={email} onChange={(event) => setEmail(event.target.value)}/>
              <textarea rows={4} placeholder="Your message to me .."   value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
              <button type='submit' className='btn btn-primary'>submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact