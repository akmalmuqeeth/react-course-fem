const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const Details = require('./Details')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')
const {shows} = require('../public/data')
const {store} = require('./Store')
const {Provider} = require('react-redux')

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

    if (showArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, showArray[0])
    return nextState
  },

  render () {
    return (
      // Provider makes our redux store available throughout the app
      // anywhere we use connector its going to find the redux store and plug it in
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>

    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
