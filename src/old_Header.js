import { AppBar, Toolbar,Grid, InputBase } from "@mui/material";
import React from "react";
//import { Link } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Grid container>                

                    <Grid item >
                        
                    <TextField
  label="Search"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header;