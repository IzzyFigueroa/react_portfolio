import axios from "axios";
import { useState } from "react";

//These dont need to be inside functions becasue they will never change
const accessKey = '9ab91f56-4fff-40ad-8bc9-6a326418c729';
const url = 'https://api.web3forms.com/submit';
const initialState = {
    access_key: accessKey,
    subject: 'New Submission from Portfolio Contact Form',
    full_name: '',
    email: '',
    message: ''
};

function ContactForm() {

    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await axios.post(url, formData);

        setAlertMessage('Your message has been received!');

        setTimeout(() => {
            setAlertMessage('');
        }, 4500)

        setFormData({...initialState})
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log('name', event.target.name)
        // console.log('value', event.target.value)
        setFormData({
            ...formData,  /*This is where we use spread (...) to import data */
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit} id="contact">
            <h3 className="text-center">Contact Me</h3>
            
            {/*THis is called a shorthand logical*/}
            {alertMessage && <p className="message text-center">{alertMessage}</p>}



            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form" />

            <input onChange={handleInputChange} value={formData.full_name} name="full_name" type="text" placeholder="Enter your full name" required />
            <input onChange={handleInputChange} value={formData.email} name="email" type="email" placeholder="Enter your email address" required />
            <textarea onChange={handleInputChange} value={formData.message} name="message" placeholder="Tell me something" id="" required></textarea>
            <button>Send</button>

        </form>
    )
}

export default ContactForm;



//YOu need name references that make the properties of your form data objects




// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         full_name:
//     })
// });