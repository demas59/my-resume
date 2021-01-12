// import axios from 'axios'
export default class Resources {
  axios = require('axios')

  getProfil() {
    return {
      lastname: 'De Massary',
      firstname: 'Aymeric',
      sujet: 'Developpeur Fullstack',
      contact: {
        email: 'demasay@gmail.com',
        tel: '06 95 56 72 93',
        adresse: 'Lille',
      },
      langues: [
        { lang: 'fr', niveau: '5' },
        { lang: 'en', niveau: '4' },
      ],
    }
  }
}
