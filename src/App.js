import './App.css';
import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import background from './assets/White_balls.jpg'
import { useOnKeyPress } from './Hooks/useOnKeyPress';
import HeaderText from './components/HeaderText';
import SearchBar from './components/SearchBar';
import ResultsDisplay from './components/ResultsDisplay.js'


function App() {



  const [pic, setPic] = useState("")
  const [name, setName] = useState("")
  const [symb, setSymb] = useState("")
  const [lynk, setLynk] = useState("")
  const [dollar, setDollar] = useState("")
  const [euro, setEuro] = useState("")
  const [pound, setPound] = useState("")
  const [desc, setDesc] = useState("")
  const [isVerified, setIsVerified] = useState(false);


  const data_fetch = (crypto) => {

    const transCrypto = crypto.toLowerCase();
    console.log(transCrypto);

    const url = 'https://api.coingecko.com/api/v3/coins/' + transCrypto;
    axios.get(url)
      .then(result => {
        console.log(result.data)
        const resData = result.data

        if (crypto === resData.id) {

          setPic(resData.image.large)
          setName(resData.market_data.name)
          setSymb(" (" + resData.symbol + ")")
          setLynk(resData.links.homepage[0])
          setDollar("Price in Dollars($): " + resData.market_data.current_price.usd)
          setEuro("Price in Euros(€): " + resData.market_data.current_price.eur)
          setPound("Price in Pounds(£): " + resData.market_data.current_price.gbp)
          setDesc(JSON.stringify(resData.description.en))

          setIsVerified(!isVerified);
        }
      })
      .catch(err => {
        console.log(err);

        if (crypto === "") {
          alert(`Please input a crypto currency in the search bar`);
        }

        if (err.message === "Request failed with status code 404") {
          alert(`${err.message}  

          "${crypto}"  is not a valid Cryptocurrency
          Please try again!.`);
        }

        if (err.code === "ERR_NETWORK") {
          alert(err.code + "\n Please check your network and try again.");
        }

      });
  }





  const markup = { __html: desc };

  useOnKeyPress(data_fetch, "Enter");


  return (
    <React.Fragment>
      <div className='App' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'fixed', backgroundSize: "cover", width: "100vw", height: "210vh" }}>
        <header className="p-5" >
          <HeaderText />
          <SearchBar
            btnClickTrigger={data_fetch}
          />
          <div className="container-fluid">
            {isVerified &&
              <ResultsDisplay
                picSource={pic}
                coinName={name}
                coinSymbol={symb}
                coinPriceDollars={dollar}
                coinPriceEuros={euro}
                coinPricePounds={pound}
                coinInfoLink={lynk}
                descriptionMarkup={markup}
              />
            }
          </div>
        </header>
      </div>

    </React.Fragment>
  );
}

export default App;
