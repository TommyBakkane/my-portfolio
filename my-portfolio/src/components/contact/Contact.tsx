import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import React from "react";
import "./Contact.css"
import * as AiIcon from "react-icons/ai"

export const Contact = () => {
    const SERVICE_ID = "service_u2a77fa";
    const TEMPLATE_ID = "template_aqd3r7r";
    const USER_ID = "5AWOKyh060oMsIV5x";

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Email sent successfully',
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        });
        e.target.reset();
    }

    return(
        <section className="contact-container">
            <h1 className="title__contact">Contact</h1>
            <div className="contact-content">
                <div className="email-container">
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        label='Email'
                        name='user_email'
                        placeholder='Email...'
                        required
                        icon='mail'
                        iconPosition='left'
                        />
                        <Form.Field
                        id='form-input-control-name'
                        control={Input}
                        label='Name'
                        name='user_name'
                        placeholder='Name...'
                        required
                        icon='user circle'
                        iconPosition='left'
                        />
                        <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Message'
                        name='user_message'
                        placeholder='Message...'
                        required
                        />
                        <Button type='submit' color="blue">Submit</Button>
                    </Form>
                </div>
                <ul className="social-icon">
                    <li className="social-item"><AiIcon.AiFillGithub/></li>
                    <li className="social-item"><AiIcon.AiFillLinkedin/></li>
                    <li className="social-item"><AiIcon.AiFillMail/></li>
                </ul>
            </div>
        </section>
    )
}