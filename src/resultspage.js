import react from 'react'



function ResultPage() {
  return (
    <React.Fragment>
      <div className='App'>
        <header className="p-5" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'fixed', backgroundSize: "cover", width: "100%", height: "auto" }}>
          <div className="App p-4 container-fluid" >
            <h1 className="title pt-5">Cryptocurrency Search Engine</h1>
            <h5 className="subHead py-2">Crypto Insights at Your Fingertips: Discover, Learn, Invest Wisely.<br />
              Your Crypto Journey begins now!
            </h5>
          </div>

          <div>
            <div className="col-md-12 d-flex justify-content-center p-5 " >
              <input type="search" value={crypto} onChange={(e) => setCrypto(e.target.value)} onBlur={changeCase} placeholder="Input cryptocurrency" className="w-25 form-control " required />
              <button type="submit" onClick={() => { data_fetch(); toogleHidden() }} className='btn btn-secondary '>Search</button>
            </div>
          </div>
          <div>
            {preview()}
          </div>



        </header>
      </div>
    </React.Fragment>
  )
}
export default ResultPage;