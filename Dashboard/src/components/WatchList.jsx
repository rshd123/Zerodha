import React, { useContext } from "react";
import { useState } from "react";
import {Tooltip, Fade} from '@mui/material';
import {watchlist} from '../data/data.js';
import {KeyboardArrowUp,KeyboardArrowDown} from '@mui/icons-material'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GeneralContext from "./GeneralContext.jsx";
import DoughnutChart from "./DoughnutChart.jsx";

const WatchList = () => {
  const labels = watchlist.map((stock)=>stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Prices',
        data: watchlist.map((stock)=>stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
      ],
    }
    ]
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,idx)=>{
          return <WatchListItem stock={stock} key={idx}/>;
        })}
      </ul>

      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = (({stock})=>{ //destructuring stock
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e)=>{
    setShowWatchListActions(true);
  };

  const handleMouseExit = (e)=>{
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down"/>) : (<KeyboardArrowUp className="up"/>)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  );
})

const WatchListActions = ({uid})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow slots={{transition:Fade}} onClick={handleBuyClick}>                                                           
        <button className="buy" style={{marginRight:'2px'}}>Buy</button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow slots={{transition:Fade}}>
        <button className="sell" style={{marginRight:'2px'}}>Sell</button>
      </Tooltip>

      <Tooltip title="Analytics" placement="top" arrow slots={{transition:Fade}}>
        <button style={{marginRight:'2px',}}><EqualizerIcon/></button>
      </Tooltip>

      <Tooltip title="more" placement="top" arrow slots={{transition:Fade}}>
        <button style={{marginRight:'2px'}}><MoreHorizIcon/></button>
      </Tooltip>
    </span>
  );
};