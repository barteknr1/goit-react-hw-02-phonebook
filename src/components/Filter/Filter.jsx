import React, { Component } from 'react'

export class Filter extends Component {
  render() {

    const {onFilterChange} = this.props;

    return (
        <label>
        <p>Find contacts by name</p>
        <input onChange={onFilterChange}
          type="text"
          name="filter"
        />
        </label>
    )
  }
}

export default Filter