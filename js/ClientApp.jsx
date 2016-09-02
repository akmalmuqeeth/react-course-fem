var React = require('react');
var ReactDOM = require('react-dom');


var MyTitle = require('./MyTitle');

var MyFirstComponent = () => {
  return (
    <div>
      <MyTitle title="Whatever" color = 'rebeccapurple'/>
      <MyTitle title="i" color = 'rebeccapurple'/>
      <MyTitle title="dont" color = 'rebeccapurple'/>
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));
