// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
 

// Seleziono l'elemento di output
const outputEmail = document.getElementById('email-list');
//console.log(outputEmail);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Faccio partire la richiesta Ajax verso l'API per ricevere l'email
axios.get(endpoint)
    .then(response => {
        // codice da eseguire in caso di successo
        const result = response.data;
        let email = result.response;
        console.log(email);
        
        // Output in pagina
        outputEmail.innerHTML = email;
    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })


