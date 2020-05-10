import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme.js';

import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Work from './Work';
import {Home} from './Home';
import {footerContent} from "./Content";
import Footer from "./components/Footer/Footer";

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={450}
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/work" component={Work} />
              <Route path="/" component={Home}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>

      <Footer content={footerContent}/>
    </ThemeProvider>
  );
}


export default App;
