import React, { Component } from "react";
//import "./App.css";
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
      <div className="container-fluid shadow">
        <HeaderComponent />
        <div className="row mx-auto mt-3">
          <div className="col order-md-1 order-2 mx-1 bg-white shadow p-2">
            <div className="container">
              <div className="row mx-auto justify-content-between">
                <img
                  src={require("./images/b1.png")}
                  alt="category-pic-alt"
                  className="img-fluid  rounded shadow-sm col-lg col-md-6 my-md-0 my-1 p-2"
                ></img>
                <img
                  src={require("./images/b2.png")}
                  alt="category-pic-alt"
                  className="img-fluid  rounded shadow-sm col-lg col-md-6 my-md-0 my-1 p-2"
                ></img>
                <img
                  src={require("./images/b3.png")}
                  alt="category-pic-alt"
                  className="img-fluid  rounded shadow-sm col-lg col-md-12 my-md-0 my-1 p-2"
                ></img>
              </div>

              {this.state.nutri.map((item) => {
                return (
                  <div className="card my-2" key={item.id}>
                    <div className="card-body row mx-auto">
                      <div className="col-lg-4 d-flex align-items-center">
                        <img
                          src={item.capa}
                          className="img-fluid rounded shadow-sm "
                          alt={item.titulo}
                        ></img>
                      </div>
                      <div className="col">
                          <h3 className="h4 text- font-weight-light"> {item.titulo}</h3>
                          <p className="text-muted small"> {item.subtitulo}</p>
                          <button className="btn btn-sm btn-info">Leia mais...</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 bg-light rounded p-2 order-md-2 order-1">
            <SideSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
