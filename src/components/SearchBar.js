import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';




function SearchBar(props) {
    const [istyping, setIstyping] = useState(false);
    const [crypto, setCrypto] = useState('');


    //a function to convert Users search input to lowercase, as Id's from API are lower cased and case sensitive.
    const changeCase = (e) => {
        setCrypto(e.target.value.toLowerCase())

    }



    return (
        <div>
            <div className="col-md-12 d-flex justify-content-center p-5 "  >
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '45ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Input Crypto Currency"
                        size="normal"
                        color="success"
                        variant="outlined"

                        type="search"
                        value={crypto}
                        onChange={(e) => {
                            setCrypto(e.target.value)
                            setIstyping(true);
                        }}
                        onBlur={changeCase}
                    // className="w-25 form-control "

                    />
                </Box>
                {istyping &&
                    <Zoom in={istyping}>
                        <Button
                            variant="contained"
                            size="small"

                            type="submit"
                            onClick={() => {
                                props.btnClickTrigger(crypto);
                                setCrypto("");
                            }}
                            className='btn btn-secondary '
                        >
                            Search
                        </Button>
                    </Zoom>
                }
            </div>
        </div>
    )
}

export default SearchBar;