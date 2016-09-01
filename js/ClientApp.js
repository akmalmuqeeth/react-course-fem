var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div;

var MyTitle = require('./MyTitle');
var MyTitleFactory = React.createFactory(MyTitle);
var ce = React.createElement;

var myFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great', color: 'purple'}),
    React.createElement(MyTitle, {title: 'User props', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'The bestttt', color: 'peru'})
  )
);

ReactDOM.render(myFirstComponent, document.getElementById('app'));
