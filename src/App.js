import React, { Component } from "react";
import List from "./compoents/List";
import Header from "./compoents/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valInput: "",
      items: [],
      type: ""
    };
  }

  Pedido = e => {
    console.log(e);
    fetch("https://itunes.apple.com/search?term=" + e + "&entity=musicVideo")
      .then(response => response.json())
      .then(response => {
        this.setState({
          items: response.results
        });
      })
      .catch();
  };
  onlyMusic = e => {
    this.setState({
      type: e.target.value
    });
  };
  onlyAlbun = e => {
    this.setState({
      type: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Header Search={this.Pedido.bind(this)} />
        <List items={this.state.items} type={this.state.type} />
        <input type="button" value="trackName" onClick={this.onlyMusic} />
        <input type="button" value="collectionName" onClick={this.onlyAlbun} />
      </div>
    );
  }
}

export default App;
