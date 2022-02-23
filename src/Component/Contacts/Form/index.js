import { useEffect, useState } from 'react'
const initialFormValues = { fullname: "", phone_number: ""}

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  // Herhangi bir değer girildikten sonra input kısmının temizlenmesi.
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value});
  }

  // Girilen değer yoksa false verir. Girilen değer varsa form arrayinin içine ekler. "...contacts" ile arrayin içinde var olan diğer bilgiler getirilir.
  const onSubmit = (event) => {
    event.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([ ...contacts, form]);

  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input 
        className='input'
        name='fullname' 
        placeholder='Full Name'
        value={form.fullname} 
        onChange={onChangeInput} />
      </div>

      <div>
        <input 
        className='input'
        name='phone_number' 
        placeholder='Phone Number'
        value={form.phone_number} 
        onChange={onChangeInput} />
      </div>

      <div className='btn'>
        <button className='button'> Add </button>
      </div>
    </form>
  )
}

export default Form