import React from 'react'
import mapPic from './mapPic.PNG'
import ContactBtn from './ContactBtn.js'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div>
      <div>
        <a href='https://www.google.com/maps/@36.849575,10.1381669,19z '>
          <img className='map-pic' src={mapPic} alt='résidence les hauteurs' />
        </a>
      </div>
      <form class='form-contact'>
        <h3>Contactez moi ! </h3>
        <span className='header-contact'>
          {' '}
          Je suis toujours là pour vous aider de toutes les manières possibles.{' '}
        </span>
        <input
          className='fa fa-envelope-o input-contact'
          placeholder=' &#xf2c0; Nom '
        />
        <input
          className='fa fa-envelope-o input-contact'
          placeholder=' &#xf003; Email'
        />
        <input
          className='fa fa-phone input-contact'
          placeholder=' &#xf095; Telephone'
        />
        <input
          className='input-contact'
          placeholder='  Ecriver votre message ici ..'
        />
        <ContactBtn />
        <div className='footer'>
          <span class='fa fa-phone footer-contact' />
          &nbsp;+(216) 22 372 239
          <br />
          <span class='fa fa-envelope-o' /> contact@clubepsilon.net
        </div>
      </form>
    </div>
  )
}
export default ContactPage
