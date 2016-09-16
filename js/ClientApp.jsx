const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const Details = require('./Details')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')
const {store} = require('./Store')
const {Provider} = require('react-redux')

const App = React.createClass({
  render () {
    return (
      // Provider makes our redux store available throughout the app
      // anywhere we use connector its going to find the redux store and plug it in
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>

    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
