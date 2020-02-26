import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import AcUnitIcon from '@material-ui/icons/AcUnit';

function App() {
  return (
    <div className="App">
      <AcUnitIcon/>
      <Button variant='contained' color="primary">Testing</Button>
    </div>
  );
}

export default App;
