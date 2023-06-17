import React,{useEffect, useState}from "react";
import axios from "axios";
import Modal from "./modal";
const CashHome = ({ currentUser }) => {
const [orders,setOrders]=useState([])
  useEffect(() => {
    const config = {
      headers: {
        authorization: sessionStorage.getItem("token"),
      },
    };
    axios.get(`${import.meta.env.VITE_API}/api/users/getAllUsers`, config)
  .then(function (response) {
    // handle success
    setOrders(response.data)
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
   
  });
  console.log(orders)
  return (

    <div className="bg-gray-100 font-sans  tracking-normal w-full h-screen">
      <h1>{currentUser.userName}</h1>
      <div className=" flex flex-wrap ">
   { orders.map((o)=><div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://www.peter-hall.co.uk/wp-content/uploads/2021/02/Oxford-Lamp-Table.jpeg" alt="River"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{o.firstName+" "+ o.lastName}</div>
        {/* <button className="bg-green-400 hover:bg-green-500 p-2 rounded text-white">Payment Detail</button> */}
        <Modal/>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#custom tag</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#custom tag</span>
        
      </div>
    </div>
   </div>
    
   
     
 ) }</div>
    </div>
  );
};

export default CashHome;
