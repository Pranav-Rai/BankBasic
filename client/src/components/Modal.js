import React, { useContext, useState } from 'react'
import globalContext from '../context/globalContext'

const Modal = ({ user, setModalDisplay, modalDisplay }) => {
  const { customers, makeTransaction, deleteCustomer } = useContext(globalContext)
  const [formData, setFormData] = useState({
    to: null,
    amount: 0,
  })
  const onChangeData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const formSubmit = e => {
    e.preventDefault()
    if (formData.amount === 0 || formData.to === null) {
      alert('Please fill the all data')
    }
    makeTransaction({
      from: user._id,
      to: formData.to,
      amount: formData.amount,
    })

    setModalDisplay(false)
  }
  const delUser = ()=>{
    deleteCustomer({
      id: user._id
    })
  }

  const onModalClose = () => {
    setFormData({
      to: null,
      amount: 0,
    })
    setModalDisplay(false)
  }
  return (
    <div className={`modal ${modalDisplay ? 'modalShow' : 'modalHide'}`}>
      <div className='modalContent'>
        <button className='modalClose' onClick={onModalClose}>
          &times;
        </button>
       
        <div className='modalBalance'>
        <button className="btnadd" onClick ={delUser}>delete User</button>
          <h2>{`${user?.name} your balance is ${user?.balance}`}</h2>
        </div>
        <h2>Perform Transaction</h2>
        <form onSubmit={formSubmit} action='#' className='transactionFrom'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={formData.amount}
            onChange={onChangeData}
          />
          <br />
          <label htmlFor='receiver'>Send To</label>
          <select defaultValue='DEFAULT' name='to' onChange={onChangeData}>
            <option value='DEFAULT' disabled>
              -- select a person --
            </option>
            {customers?.map(customer => (
              <option key={customer._id} value={customer._id}>
                {customer.name}
              </option>
            ))}
          </select>
          <br />
          <button type='submit'>Procced</button>
        </form>
      </div>
    </div>
  )
}

export default Modal