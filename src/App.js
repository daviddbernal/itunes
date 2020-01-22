import React, {Component} from 'react';
import List from '../src/compoents/list'
import Utils from '../src/compoents/pedidoAjax'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valInput: '',
      list: ''
    }
  }
  
  Data = (dat) => {
    for(let iterator in dat.results) {
      switch(dat.results[iterator].artistName) {
        case "Jack Johnson":
          console.log("Jack Johnson")
        break;
        case "J.J. Abrams":
          console.log("J.J. Abrams")
        break;
        case "Jake Kasdan": 
          console.log("Jake Kasdan")
        break;
        case "Stephen Merchant":
          console.log("Stephen Merchant")
        break;
        case "Jack & Jack":
          console.log("Jack & Jack")
        break;
        case "Jack Johnson, Dave Matthews & Tim Reynolds":
          console.log("Jack Johnson, Dave Matthews & Tim Reynolds")
        break;
        case "Stanley Kubrick":
          console.log("Stanley Kubrick");
        break;
        case "Steven Soderbergh":
          console.log("Steven Soderbergh");
        break;
      }
    }
  }

  Pedido = () => {
    fetch('https://itunes.apple.com/search?term=jack+johson')
    .then(response => response.json())
    .then(this.Data)
    .catch();
  }

  render() {
    return (
      <div className="App">     
        <Utils 
          valueInput={this.state.valInput}
          valueButton='enviar'
          type='text'
          Event={this.Pedido.bind(this)}
        />
        {this.state.list}
      </div>
    );
  }
}

export default App;
