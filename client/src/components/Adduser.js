import React,{useContext , useState} from 'react'
import globalContext from '../context/globalContext'


const Adduser = () => {
    const {addCustomer} = useContext(globalContext)
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        balance:""
      })
      const onChangeData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
      }

      const formSubmit = e => {
        e.preventDefault()
        console.log(e)
        if (formData.name === 0 || formData.email === null || formData.balance === null) {
          alert('Please fill the all data')
        }
        addCustomer({
          name: formData.name,
          email: formData.email,
          balance: formData.Balance,
        })
    
        
      }

    return (
        <div className="form_container">
        <form className="form-style-4" onSubmit={formSubmit} >
        <label for="field1">
         <input
            type='name'
            id='name'
            name='name'
            value={formData.name}
            placeholder='name'
            onChange={onChangeData}
          /></label>

<label for="field2">
           <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            placeholder='email'
            onChange={onChangeData}
          /></label>
  
      
<label for="field3">
            <input
            type='number'
            id='Balance'
            name='Balance'
            value={formData.Balance}
            placeholder='Balance'
            onChange={onChangeData}
          />
          </label>

          <label>
   <button className="btnadd" type="submit">
    Submit
    </button>
    </label>
    </form>
            
        </div>
    )
}

export default Adduser
