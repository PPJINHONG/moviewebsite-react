import { useEffect, useState } from 'react';

function Coin() { 
    const [loading,setloading] = useState(true)
    const [coins,setcoins] = useState([]);
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json)=>{
        setcoins(json);
        setloading(false);
        
      });

    },[]);
    const [selected,setselected] = useState(0)
    const hanleSelect = (e) => {
      setselected(e.target.value);
    };
    console.log(selected);
    
    console.log(coins);
    

  return (
    <div>
      {loading ? (<h1>loading....</h1>) : (<h3>coin counter:{coins.length} </h3>)}
      
      {loading ? (null) : 
      (<select onChange={hanleSelect} value={selected} >
        {coins.map((co,ind) => (
        <option value={ind} key={ind}>
          {co.name} {co.symbol} 
        </option>
      ))}
      </select> 
       )       
   }  
  
   {loading ? (null) : (<p>
     <br />
     <hr />
     <br />

        <p> name : {coins[selected].name} </p>
        <p> rank : {coins[selected].rank} </p>
        <p> price : $ {coins[selected].quotes.USD.price}  </p>
        <p> last_updated : {coins[selected].last_updated} </p>
        <p> total supply : {coins[selected].total_supply} </p>
        </p>
        ) 
  }
   </div>
   )
}

export default Coin;
