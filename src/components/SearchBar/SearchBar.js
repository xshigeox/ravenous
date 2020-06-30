import React, { useState } from "react"
import "./SearchBar.css"

const SearchBar = (props) => {
  const [search, setSearch] = useState({
    term: "",
    location: "",
    sortBy: "best_match",
  })

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  }

  const getSortByClass = (sortByOption) => {
    if (search.sortBy === sortByOption) {
      return "active"
    } else {
      return ""
    }
  }

  const handleSortByChange = (event) => {
    event.preventDefault()
    setSearch({ ...search, sortBy: event.currentTarget.id })
  }

  const handleTermChange = (event) => {
    event.preventDefault()
    setSearch({ ...search, term: event.currentTarget.value })
  }

  const handleLocationChange = (event) => {
    event.preventDefault()
    setSearch({ ...search, location: event.currentTarget.value })
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption]
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          onClick={handleSortByChange}
          key={sortByOptionValue}
          id={sortByOptionValue}
        >
          {sortByOption}
        </li>
      )
    })
  }

  const handleSearch = (event) => {
    event.preventDefault()
    props.searchYelp(search.term, search.location, search.sortBy)
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  )
}

export default SearchBar
