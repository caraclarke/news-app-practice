var React = require('react');
var ReactRoutes = require('react-routes');
var Router = ReactRouter.Router;
var Route = Reactrouter.Route;

var createHistory = require('history/lib/createHashHistory');
var History = new createHistory({
  queryKey: false
)};

var Base = require('./components/base.jsx');
var NewsPage = require('./components/NewsPage.jsx');
var PhotoPage = require('./components/PhotoPage.jsx');

var Routes = (

  <Router history={History}>
    <Route path="/" component={Base} >
      <Route path="/NewsPage" component={NewsPage}></Route>
      <Route path="/PhotoPage" component={PhotoPage}></Route>
    </Route>
  </Router>

);

module.exports = Routes;
