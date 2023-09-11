import Loader from 'react-loaders'
import './index.scss'
import {AnimatedLetters} from '../../assets/AnimatedLetters';
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    }, []);

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs 
      .sendForm(
        'service_yz6sark',
        'template_eiseu5k',
        refForm.current,
        'STOwxeyNALfoCrATv'

      )
      .then(
        () => {
          alert('Message Sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to Send the message :(, Try again!')
        }
      )
    }


    return (
        <>
            <div className= "container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                        idx={15}
                        />
                        </h1>
                        <p>

                        I am currently seeking opportunities that align with my skills, experiences, and career aspirations. 
                        If you have any positions that you believe would be a good fit, or if you'd simply like to connect and discuss potential opportunities, I would be delighted to hear from you.


                        </p>
                        <div className='contact-form' >
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className="half">
                  <input placeholder="Name" type="text" name="your_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="from_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
           </div>
          </div>    
        </div>
            <Loader type= "pacman" />
        </>
    )
}

export default Contact