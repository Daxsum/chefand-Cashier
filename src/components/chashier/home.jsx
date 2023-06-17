import React,{useEffect, useState}from "react";
import axios from "axios";
import Modal from "./modal";
const CashHome = ({ currentUser }) => {
const [orders,setOrders]=useState([])
const [payment,setPayment]=useState("Not Complited")
  useEffect(() => {
    const config = {
      headers: {
        authorization: sessionStorage.getItem("token"),
      },
    };
    axios.get(`${import.meta.env.VITE_API}/api/order/getAllActive`, config)
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
  setTimeout(() => {
    setPayment("payed");
  }, "30000");
  return (

    <div className="bg-gray-100 font-sans  tracking-normal w-full h-screen">
      <h1 className="text-7xl bg-orange-500 text-white">{ "Wellcome Back: "+currentUser.userName}</h1>
      <div className=" flex flex-wrap ">
        {orders.length===0 && <h1 className="text-6xl text-center flex flex-row justify-center items-center">There is no Order Right Now! Loading...</h1>}
   { orders.length!==0 && orders.map((o)=><div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={`${import.meta.env.VITE_API}/${o.item.filePath}`} alt="ordered food"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{o.quantity} {o.item.name} {orders.reduce((sum, obj) => sum + obj.item.price * obj.quantity, 0)} birr</div>
        {/* <button className="bg-green-400 hover:bg-green-500 p-2 rounded text-white">Payment Detail</button> */}
        {/* <Modal/> */}
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{o.who.userName}</span>
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{"payment:"+payment}</span>
        
      </div>
    </div>
   </div>
    
   
     
 ) }</div>
    </div>
  );
};

export default CashHome;
