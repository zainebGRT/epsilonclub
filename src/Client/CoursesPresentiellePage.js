import React, { Component } from 'react'
import './CoursesPage.css'
class CoursesPresentiellePage extends Component {
  render () {
    return (
      <div>
        <div className='cours-particulier'>
          <div className='cours-en-ligne'>
            <h4> Séances en ligne</h4>
            <br />
            <span>
              Nous vous proposons des séances à distances par Skype selon vos
              disponibilités
            </span>
            <br />
            <span>
              <b>Prix :</b> 20 DT / séance
            </span>
            <span>
              <br />
              <b>Réservation :</b> Nous contacter en précisant votre classe et
              vos horaires préférés
            </span>
          </div>
        </div>
      </div>
    )
  }
}
export default CoursesPresentiellePage
