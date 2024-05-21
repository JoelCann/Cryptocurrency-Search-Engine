import React from 'react';

function ResultsDisplay(props) {
    return (
        <div>
            <div className='containerMargin  text-center p-5 '>
                <div className='col-md-4 p-5 frostedGlass' >
                    <img src={props.picSource} width="150" className="py-3 " alt="" /><br />
                    <h1 >{props.coinName}{props.coinSymbol}</h1><br />
                    <br />
                    <p style={{ Color: "green[500]" }}>
                        {props.coinPriceDollars}<br />
                        {props.coinPriceEuros}<br />
                        {props.coinPricePound}
                    </p><br />
                    <p><a href={props.coinInfoLink}>Official Website</a></p>
                </div>
            </div>


            <div className='row containerMargin container-fluid' >
                <div className='col-md-8 p-5 text-center py-10 justify-content-center frostedGlass2' >
                    <div style={{ fontWeight: "120px", fontSize: "20px" }} dangerouslySetInnerHTML={props.descriptionMarkup} />
                </div>
            </div>
        </div>
    )
}

export default ResultsDisplay;  