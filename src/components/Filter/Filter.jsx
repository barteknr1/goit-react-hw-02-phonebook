import React, { Component } from 'react'

class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
        <label>
        <p>Find contacts by name</p>
        <input onChange={onChange}
          type="text"
          name="filter"
        />
        </label>
    )
  }
}

export default Filter