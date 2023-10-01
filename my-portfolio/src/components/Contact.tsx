import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Footer } from "./Footer";

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
        <section className="w-full h-screen bg-stone-50 z-1 p-4" id="contact">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="" className="flex flex-col w-full md:w-1/2">
                        <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                        <input 
                        type="text"
                        name="email"
                        placeholder="Enter your e-mail"
                        className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                        <textarea
                        name="message"
                        placeholder="Enter your message"
                        rows={10}
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />

                        <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white">Submit</button>
                    </form>

                </div>
            </div>
            <Footer />
        </section>
    )
}