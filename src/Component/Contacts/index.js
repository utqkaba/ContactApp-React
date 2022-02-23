import { useState, useEffect  } from 'react'

import "./styles.css"

import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Utku",
      phone_number: "0531 333 22 22"
    },
    {
      fullname: "Burakhan",
      phone_number: "0541 222 11 11"
    },
    {
      fullname: "Enes",
      phone_number: "0551 111 99 99"
    },
    {
      fullname: "Ferda",
      phone_number: "0531 999 32 13"
    },
  ]);

  useEffect(() => {
    // Arraye ekleme kısmını görebilmek için logladık.
    console.log(contacts); 
  }, [contacts]);

  return (
    // <p className='head'>
    <div id='container'> 

    <div className='creator'>
      <a className='creator' target="_blank" href="https://github.com/utqkaba"> GitHub - </a>
      <a className='creator' target="_blank" href="https://www.linkedin.com/in/utkukaba/"> - Linkedin </a> 
    </div>
    <hr />
    <h1 className='head'>Contacts App</h1>
    <p className='text'>Search Contact</p>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} /> 
    </div>
    // </p>
  )
}

export default Contacts