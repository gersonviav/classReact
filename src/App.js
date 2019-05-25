import React ,{Component}from 'react';
import 'bulma/css/bulma.css'
import {Title} from   './components/Title'
import './App.css';
import {SearchForm} from './components/SearchForm'
import {Movie} from './components/Movie'
import { MovieList } from './components/MovieList';
class App extends Component{
  state={
   results:[]
}
//el estate se actualiza en el metodo handleresult  con
//los result que le pasamos  y este result se pasa como prop
//al componente SearchForm
_handleResults=(results)=>{
  this.setState({results})
  }
  
   render(){
  return (
  
    <div className="App">
     <Title >Search Movies</Title>
    <div className="SearchForm-wrapper">
     <SearchForm onResults={this._handleResults}/>
     </div>
     {this.state.results.length===0
     ?<p>  Sin resultados</p>
     : <MovieList movies={this.state.results}/>
    }
    </div>
  );
}
}

export default App;
