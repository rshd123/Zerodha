import axios from "axios";
import React, { useEffect, useState } from "react";
// import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(()=>{
    axios.get("https://zerodhakite.onrender.com/allPositions")
      .then((res)=>{
        setAllPositions(res.data);
      })
  },[])
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock,idx)=>{
                const currVal = stock.price * stock.qty;
                const isProfit = currVal - stock.avg >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return(
                    <tr key = {idx}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={isProfit}>{(currVal - stock.avg*stock.qty).toFixed(2)}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;