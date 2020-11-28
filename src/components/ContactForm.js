import React from 'react';
import { Input, TextArea, ActionButton } from '../components/InfoSection/InfoElements';
import { RiSendPlaneFill } from 'react-icons/ri';

const ContactForm = () => {
    return (
        <>
            <form name='contactForm' method='post'>
                <input type="hidden" name="form-name" value="contactForm" />
                <Input type='text' placeholder='Name' name='name' />
                <Input type='email' placeholder='Email' name='email' />
                <TextArea placeholder='Message' name='message' />
                <br/>
                <ActionButton type='submit'>Send <RiSendPlaneFill /></ActionButton>
            </form>
        </>
    )
}

export default ContactForm
