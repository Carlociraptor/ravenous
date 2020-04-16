import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'
import logo from '../../logo.svg';
import yelp from '../../util/Yelp'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {businesses: []}
    this.searchYelp = this.searchYelp.bind(this)
  }
  searchYelp(term, location, sortBy){
    yelp.searchYelp(term, location, sortBy)
      .then((businesses) => {
        this.setState({businesses: businesses })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;