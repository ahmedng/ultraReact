import React , {Component} from 'react';
import { Link } from 'react-router-dom'

import Home from './../Home'
import About from './../About'
import SocialMedia from './../Social-media'
import Wrok from './../Work'
import Footer from './../Footer'
import Portfolio from './../Portfolio';
import Profile from './../Profile';


class Index extends Component{
  render(){
      return (
        
          <div className="app">
              <Home />
              <Wrok />
              <Portfolio />
              <Profile />
              <About />
              <SocialMedia />
              <Footer />

          </div>
      
      );
    }
  }
export default Index;
