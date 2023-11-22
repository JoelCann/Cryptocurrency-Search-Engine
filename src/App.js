import './App.css';
import React from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {

  const [crypto, setCrypto] = useState('')
  const [pic, setPic] = useState("")
  const [name, setName] = useState("")
  const [symb, setSymb] = useState("")
  const [lynk, setLynk] = useState("")
  const [dollar, setDollar] = useState("")
  const [euro, setEuro] = useState("")
  const [pound, setPound] = useState("")
  const [desc, setDesc] = useState("")


  const data_fetch = () => {
    const url = 'https://api.coingecko.com/api/v3/coins/' + crypto;
    axios.get(url)
      .then(result => {
        console.log(result.data)
        const resData = result.data
        setPic(resData.image.large)
        setName(resData.name)
        setSymb(" (" + resData.symbol + ")")
        setLynk(resData.links.homepage[0])
        setDollar("Price in Dollars($): " + resData.market_data.current_price.usd)
        setEuro("Price in Euros(€): " + resData.market_data.current_price.eur)
        setPound("Price in Pounds(£): " + resData.market_data.current_price.gbp)
        setDesc(JSON.stringify(resData.description.en))

      })
      .catch(err => console.log(err))
  }

  const markup = { __html: desc };

  return (
    <React.Fragment>
      <div className="App p-4 container-fluid" >
        <h1 className="title pt-5">Cryptocurrency Search Engine</h1>
        <h5 className="subHead py-2">Crypto Insights at Your Fingertips: Discover, Learn, Invest Wisely.<br />
          Your Crypto Journey begins now!
        </h5>
      </div>

      <div>
        <div className="col-md-12 d-flex justify-content-center p-5 " >
          <input type="text" value={crypto} onChange={(e) => setCrypto(e.target.value)} placeholder="Input cryptocurrency" className="w-25 form-control" required />
          <button onClick={data_fetch} className='btn btn-secondary '>Search</button>
        </div>
      </div>

      <div className='containerMargin'>
        <div className='col-md-4 p-5   text-center ' /*style={{ backgroundColor: "green" }}*/ >
          <img src={pic} width="150" className="py-3" /><br />
          <h1>{name}{symb}</h1><br />
          <h3><a href={lynk}>{lynk}</a></h3><br /><br />
          <h2 style={{ Color: "green[500]" }}>{dollar}</h2><br />
          <h2>{euro}</h2><br />
          <h2>{pound}</h2>
        </div>
      </div>


      <div className='row containerMargin'  >


        <div className='col-md-8 p-5 text-center py-10 justify-content-center ' >
          <div dangerouslySetInnerHTML={markup} />

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;