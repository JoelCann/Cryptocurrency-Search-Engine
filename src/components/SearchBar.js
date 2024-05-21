import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <div className="col-md-12 d-flex justify-content-center p-5 "  >
                <input
                    type={props.inputType}
                    value={props.inputValue}
                    onChange={props.changeTrigger}
                    onBlur={props.blurrTrigger}
                    placeholder={props.inputPlaceholder}
                    className="w-25 form-control "
                    required
                />
                <button
                    type={props.btnTyoe}
                    onClick={props.btnClickTrigger}
                    className='btn btn-secondary '
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;