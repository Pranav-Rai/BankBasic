import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Transactions from './components/Transactions'
import Customers from './components/Customers'
import Footer from './components/Footer'
import Home from './components/Home'
import GlobalState from  './context/GlobalState'
import './App.css';
import Adduser from './components/Adduser'

function App() {
  return (
   <>
    <GlobalState>
  <Router>
        <Navbar />
        <div className='appContainer'>
          <Switch>
            <Route path='/transactions' component={Transactions} />
            <Route path='/customers' component={Customers} />
            <Route path='/Add users' component={Adduser} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
      </GlobalState>
   </>
  );
}

export default App;

