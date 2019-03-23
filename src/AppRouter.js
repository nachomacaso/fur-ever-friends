import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from './App';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => (<Redirect to="/gallery" />)}/>
        <Route exact path="/gallery" component={App} />
        {
          // UNCOMMENTED OUT SINCE COMPONENTS NOT BUILT 
          // BUT FOR BETTER SEO RESULTS I WOULD USE REACT ROUTER.
          // ROUTES CAN BE INDEXED BY GOOGLE, 
          // EVEN IF THIS IS A SINGLE PAGE APP.
          // <Route exact path="/about-us/" component={About} />
          // <Route exact path="/contact/" component={Contact} />
        }
      </div>
    </Router>
  );
}

export default AppRouter;