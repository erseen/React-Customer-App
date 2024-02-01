import { useState } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerList from './components/CustomerList/CustomerList';

function App() {
  const [customers,SetCustomers]=useState([]);

const addNewCustomer=(newCustomer)=>{
 SetCustomers((prevState)=>[newCustomer,...prevState, ]);


}
  return (
    <div className="App">
    <h1>Customer Manage System</h1>
    <CustomerForm addNewCustomer={addNewCustomer} />
    {customers.length===0 && "There are no customers"}
    <CustomerList customers={customers} SetCustomers={SetCustomers}/>
    </div>
  );
}

export default App;
