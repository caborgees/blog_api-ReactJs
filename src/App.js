import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import SideSection from "./components/SideSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: [],
    };
  }

  componentDidMount() {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        let state = this.state;
        state.nutri = json; //recebeu o json
        this.setState(state);
        console.log(json);
      });
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <SideSection />
        <div className="Postagens">
          <div className="Categorias">
            <img src={require("./images/b1.png")}></img>
            <img src={require("./images/b2.png")}></img>
            <img src={require("./images/b3.png")}></img>
          </div>

          {this.state.nutri.map((item) => {
            return (
              <div className="PostagensBlog" key={item.id}>
                <article  className="Post">
                  <h3 className="Titulo"> {item.titulo}</h3>
                  <img src={item.capa} className="Capa"></img>
                  <p className="Subtitulo"> {item.subtitulo}</p>
                  <button className="Botao">Leia mais...</button>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
