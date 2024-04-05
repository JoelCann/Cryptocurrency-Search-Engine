import './App.css';
import React from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import background from './assets/White_balls.jpg'
import { useOnKeyPress } from './Hooks/useOnKeyPress';
// import ResultPage from './resultspage.js'


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
  const [isVerified, setIsVerified] = useState(false)


  const data_fetch = () => {
    crypto.toLowerCase();

    console.log(crypto);

    const url = 'https://api.coingecko.com/api/v3/coins/' + crypto;
    axios.get(url)
      .then(result => {
        console.log(result.data)
        const resData = result.data

        if (crypto === resData.id) {

          setPic(resData.image.large)
          setName(resData.name)
          setSymb(" (" + resData.symbol + ")")
          setLynk(resData.links.homepage[0])
          setDollar("Price in Dollars($): " + resData.market_data.current_price.usd)
          setEuro("Price in Euros(€): " + resData.market_data.current_price.eur)
          setPound("Price in Pounds(£): " + resData.market_data.current_price.gbp)
          setDesc(JSON.stringify(resData.description.en))

          setIsVerified(!isVerified);
          preview();
        }
      })
      .catch(err => {
        console.log(err);
        if (err.code === "ERR_BAD_REQUEST") {
          alert(err.code + `\n \n` + `"` + crypto + `"` + `  is not a valid Cryptocurrency \n Please try again!.`);
        };

        if (err.code === "ERR_NETWORK") {
          alert(err.code + `\n \n` + `Please check your network and try again.`);
        }

        if (crypto === "") {
          alert(`Please input a crypto currency in the search bar`);
        }
      });
    setCrypto('');
  }


  //a function to convert Users search input to lowercase, as Id's from API are lower cased and case sensitive.
  const changeCase = (e) => {
    setCrypto(e.target.value.toLowerCase())

  }


  const markup = { __html: desc };



  // const verifyId = resData.map(data => {
  //   if (crypto !== data.id) {
  //     return (
  //       alert(`Input is not a valid Cryptocurrency`))
  //   }

  // })


  const preview = () => {
    // console.log(ishidden + " (from preview function)")
    // if (ishidden === false) {
    return isVerified ? (
      <React.Fragment>
        <div>
          <div className='containerMargin  text-center p-5 '>
            <div className='col-md-4 p-5 frostedGlass' >
              <img src={pic} width="150" className="py-3 " alt="" /><br />
              <h1 >{name}{symb}</h1><br />
              <br />
              <p style={{ Color: "green[500]" }}>
                {dollar}<br />
                {euro}<br />
                {pound}
              </p><br />
              <p><a href={lynk}>Official Website</a></p>
            </div>
          </div>


          <div className='row containerMargin container-fluid' >
            <div className='col-md-8 p-5 text-center py-10 justify-content-center frostedGlass2' >
              <div style={{ fontWeight: "120px", fontSize: "20px" }} dangerouslySetInnerHTML={markup} />
            </div>
          </div>
        </div>


      </React.Fragment>
    ) : retNull();

    //}

    // else {
    //   return null;
    // }
  };



  const displayPreview = () => {
    setIsVerified(isVerified);
  }

  const retNull = () => {
    setIsVerified(!isVerified);
    return null;
  }

  useOnKeyPress(data_fetch, "Enter");


  return (
    <React.Fragment>
      <body>
        <div className='App' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'fixed', backgroundSize: "cover", width: "100vw", height: "210vh" }}>
          <header className="p-5" >
            <div className="App p-4  container-fluid" >
              <h1 className="title pt-5">Cryptocurrency Search Engine</h1>
              <h5 className="subHead py-2">Crypto Insights at Your Fingertips: Discover, Learn, Invest Wisely.<br />
                Your Crypto Journey begins now!
              </h5>
            </div>

            <div>
              <div className="col-md-12 d-flex justify-content-center p-5 "  >
                <input
                  type="search"
                  value={crypto}
                  onChange={(e) => setCrypto(e.target.value)}
                  onBlur={changeCase}
                  placeholder="Input cryptocurrency"
                  className="w-25 form-control "
                  required
                />
                <button
                  type="submit"
                  onClick={() => {
                    data_fetch();
                    displayPreview();
                  }
                  }
                  className='btn btn-secondary '
                >
                  Search
                </button >
              </div>
            </div>
            <div className="container-fluid">
              {isVerified ? preview() : null}
              {/* {preview()} */}
            </div>



          </header>
        </div>
      </body>
    </React.Fragment>
  );
}

export default App;
