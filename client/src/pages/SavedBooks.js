import React, { Component } from 'react'
import SavedBooks from "../components/SavedBooks"
import Card from "../components/Card"


export default class ReadingList extends Component {

  render() {
    return (
      <div className="container">
        < Card heading="Saved Books" />
        <SavedBooks />
      </div>
    )
  }
}