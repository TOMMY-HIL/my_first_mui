import './App.css';
import Header from './Header.js';
import Button from '@mui/material/Button';

import TextField from '@material-ui/core/TextField';

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import Container from '@mui/material/Container';
import classes from './Main.module.css';

function App() {
  
  return (
    <>
      <Header>
      
      </Header>
      <Container>
        <div className={classes.appMain}>
          App.js
        </div>
      
      </Container>
    </>
  
  );
}

export default App;
