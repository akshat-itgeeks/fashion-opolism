import React from 'react'
import './contact.css'
import ContactBanner from './components/contactBanner/ContactBanner'
import ContactForm from './components/contactForm/ContactForm'

export default function Contact() {

  return (
    <div className='contact-full-page'>
        <ContactBanner/>
        <ContactForm/>
    </div>
  )
}
