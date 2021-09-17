import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import BannerTop from './components/BannerTop';
import Footer from './components/Footer';
import Info from './components/Info';
import Nav from './components/Nav';
import Quetion from './components/Quetion';
import Testimonial from './components/Testimonial';
function App() {
  return (
      <Switch>
          <Route path="/">
            <Nav/>
            <BannerTop/>
            <About/>
            <Testimonial/>
            <Info/>
            <Quetion/>
            <Footer/>
          </Route>
      </Switch>
  );
}

export default App;
