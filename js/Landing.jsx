const React = require('react')
const {Link} = require('react-router')
const {connector} = require('./Store')
const { func, string } = React.PropTypes

const Landing = (props) => {
  function handleSearchTermEvent (event) {
    props.setSearchTerm(event.target.value)
  }

  return (
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' value={props.searchTerm} onChange={handleSearchTermEvent} />
      <Link to="/search" className='browse-all'> or Browse Here</Link>
    </div>
  )
}

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
