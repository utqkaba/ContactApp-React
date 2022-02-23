import { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  // Contact kaydını filtrelemek için alıyoruz. Item obje olduğu için keyleri (fullname ve phone_number) alıyoruz ve filtreliyoruz. Herhangi birinin içinde "filterText.toLocaleLowerCase()" ifadesi geçiyorsa bunu bana getir.
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase());
    });
  });

  console.log("filtered", filtered);

  return (
    <div>
      <input 
      className='input'
      placeholder='Filter Contact'
      value={filterText}
      onChange={(event) => setFilterText(event.target.value)} />

      <ul className='list'>
        { filtered.map((contacts, index) => (
          <li key={index}> 
            <span> {contacts.fullname} </span>
            <span> {contacts.phone_number} </span>
          </li>
        ))
        }
      </ul>

      <p className='text'>Total Contacts: {filtered.length}</p>
      <hr />
      <p className='text'>Add Contact</p>
    </div>
  )
}

export default List