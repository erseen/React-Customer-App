import { useState } from "react";
import CustomerItem from "../CustomerItem/CustomerItem";
import './CustomerList.css'

function CustomerList({customers,SetCustomers}) {
const handleDelete=(item)=>{
  SetCustomers(customers.filter((customer)=>customer.id!==item.id))
}

    return (
        <ul className="customer-list">
          {customers.map((customer)=>(
            <CustomerItem 
            customer={customer} 
            key={customer.id} 
            handleDelete={handleDelete}
            />
          ))}
        </ul>
    )

}
export default CustomerList;