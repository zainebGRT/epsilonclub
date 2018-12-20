import React, { Component } from 'react'
import './CoursesPage.css'
class CoursesParticulierPage extends Component {
  render () {
    return (
      <div className='cours-présentielles'>
        <h2>COURS PARTICULIERS</h2>
        <br />
        <h4>Séances présentielles</h4>
        <br />
        <span>
          <b>Lieu :</b> Tunis (Menzah 9 ou Wardiya)
        </span>
        <br />
        <span>
          <b>Prix :</b> 25 DT / séance
        </span>
        <br />
        <span>
          <b>Réservation :</b> Nous contacter en précisant votre classe et vos
          horaires préférés
        </span>
        <br />
      </div>
    )
  }
}
export default CoursesParticulierPage
