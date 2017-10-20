import React from 'react';
import {Route} from 'react-router-dom';
import App from './components/app';
import Home from './components/home';
import Listings from './components/listings';
import Solds from './components/solds';
import Testimonials from './components/testimonials';

class Routes extends React.Component {
  render() {
    return (

      <div>
        <Route exact name="home" path="/" component={Home} />
        <Route exact name="listings" path="/listings" component={Listings} />
        <Route exact name="solds" path="/solds" component={Solds} />
        <Route exact name="testimonials" path="/testimonials" component={Testimonials} />
      </div>

    )
  }
};

export default Routes;
