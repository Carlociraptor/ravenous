import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    
    getSortByClass(sortByOption){
        if(sortByOption === this.state.sortBy){
            return 'active';
        }else{
            return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(event){
        this.setState({term: event.target.value})
    }

    handleLocationChange(event){
        this.setState({location: event.target.value})
    }    

    handleSearch() {      
        if (!this.state.term) alert('Please enter a food type!')
        if (!this.state.location) alert('Please enter a location!')
        if (!this.state.term || !this.state.location) return

        const { 
            term,
            location,
            sortBy
        } = this.state

        this.props.searchYelp(term, location, sortBy)         
    }

    handleKeyPress({ key }) {                  
        if (key === 'Enter') this.handleSearch()
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
        })
    }

    render() {        
        return (
            <div class="SearchBar">
                <div class="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div class="SearchBar-fields">
                    <input onChange={this.handleTermChange}placeholder="What are you in the mood for?" onKeyDown={this.handleKeyPress}/>
                    <input onChange={this.handleLocationChange}placeholder="Where?" onKeyDown={this.handleKeyPress}/>
                </div>
                <div class="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;