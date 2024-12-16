import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
  }, []);

  let resp;
  if(allOrders.length == 0){
    resp=<div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">
              Get started
            </Link> 
          </div>
  }else{
    resp=<div className="no-orders">
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((stock, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td>{stock.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
  }
  return (
    <div className="orders">
      <div className="no-orders">
        {resp}
      </div>
    </div>
  );
};

export default Orders;
