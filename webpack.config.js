const path = require('path');

module.exports = {
  context : __dirname,
  entry : './js/ClientApp.jsx',
  output : {
    path : path.join(__dirname, './public'),
    filename : 'bundle.js'
  },
  //order in which to look for files
  resolve : {
    extensions : ['', '.js', '.jsx', '.json']
  },
  //console output settings
  stats : {
    colors : true,
    reasons : true,
    chunks : false
  },
  //external dependencies you want to bring in
  module : {
    loaders : [
      {
        //regular expression to search for files and apply this plugin
        test : /\.jsx?$/,
        loader : 'babel-loader'
      }
    ]
  }
}
