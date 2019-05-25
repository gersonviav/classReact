import React, { Component } from 'react'

const API_KEY = '40b2d5e0'

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }
//se hace una peticion a la api usando una api key y pasando 
//como parametro  el texto que a introducido el usuario
  _handleSubmit = (e) => {
    e.preventDefault()
    const{inputMovie}=this.state

   fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}
  `
  ).then(res=>res.json())
    .then(results=>{
      //se extrae la propiedad search y total results
      const {Search,totalResults}=results
      console.log({Search,totalResults})
      //onreulst es el componente que actualizara el state 
      this.props.onResults(Search)
    })
    
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Movie to search..." />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}