import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Work from './Work';
import {Home} from './Home';
import {footerContent} from "./Content";
import Footer from "./components/Footer/Footer";



function App() {

  return (
    <Router>
    <ThemeProvider theme={theme}>
      <Header/>
      <Switch>
        <Route path="/work" component={Work} />
        <Route path="/" component={Home}/>
      </Switch>
      <Footer content={footerContent}/>
    </ThemeProvider>
    </Router>
  );
}


export default App;
