import React, { useReducer } from 'react'
import globalContext from './globalContext'
import globalReducer from './globalReducer'
import axios from 'axios'


const GlobalState = props =>{
    const initialState = {
        customers: null,
        transactions: null,
        loading: false,
      }
      const [state, dispatch] = useReducer(globalReducer, initialState)

      const getCustomers = async () => {
        loading(true)
        const customers = await axios.get('./api/customers')
        dispatch({
          type: 'SET_CUSTOMERS',
          payload: customers.data,
        })
      }

      const addCustomer = async data => {
        console.log(data)
        loading(true)
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        try {
          await axios.post('/api/customers', data , config)
        } catch (error) {
          console.log(error)
        } finally {
          alert("User added Successfully")
          getCustomers()
          loading(false)
        }
      }

      const deleteCustomer = async data=>{
        console.log(data)
        loading(true)

        try {
          await axios.delete(`/api/customers/${data.id}` )
        } catch (error) {
          console.log(error)
        } finally {
          getCustomers()
          loading(false)
        }
      }
      




      const getTransactions = async () => {
        loading(true)
        const transactions = await axios.get('./api/transaction')
        dispatch({
          type: 'SET_TRANSACTIONS',
          payload: transactions.data,
        })
      }

      const makeTransaction = async data => {
        loading(true)
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        try {
          await axios.post('/api/transaction', data, config)
        } catch (error) {
          console.log(error)
        } finally {
          getCustomers()
          loading(false)
        }
      }

      const loading = data => {
        dispatch({
          type: 'LOADING',
          payload: data,
        })
      }

      return (
        <globalContext.Provider
          value={{
            customers: state.customers,
            transactions: state.transactions,
            loading: state.loading,
            getCustomers,
            deleteCustomer,
            getTransactions,
            makeTransaction,
            addCustomer
          }}
        >
          {props.children}
        </globalContext.Provider>
      )




}



export default GlobalState