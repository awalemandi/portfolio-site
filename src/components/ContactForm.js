import React from 'react';
import { Input, ActionButton } from '../components/InfoSection/InfoElements';
import { RiSendPlaneFill } from 'react-icons/ri';

const ContactForm = () => {
    return (
        <>
            <form name='contact' method='POST' data-netlify='true'>
                <Input placeholder='Name' name='name' />
                <br />
                <Input placeholder='Message' name='message' size='3em' />
                <br />
                <div data-netlify-recaptcha='true'></div>
                <ActionButton type='submit'>Send <RiSendPlaneFill /></ActionButton>
            </form>
        </>
    )
}

export default ContactForm
