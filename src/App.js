import React, {Component} from 'react';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props)
    this.state={
      nutri:[]
    
    }
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    fetch(url)
    .then((r) => r.json())
    .then((json) =>{
      let state = this.state
      state.nutri= json //recebeu o json
      this.setState(state)
      console.log(json)
      })
    }

  render(){
  return (
    <div className="App">
     <header>
       
 <img src={require('./images/banner.png')} ></img>
     </header>

     <div className="Menu"> 
     <div className="Sessao">
       <div className="Sobre">
        <h4>Sobre</h4>
        <img src={require('./images/avatar.png')} className="avatar" ></img>
        <p> Ola! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           standard dummy text ever since the 1500s, it to make a type specimen book. </p>
      </div>
      </div>

      <div className="Sessao">
        <h4>Categorias</h4>
        <ul> 
          <li> Saude</li>
          <li> Alimentacao</li>
          <li> Receitas</li>
          <li> Rotina</li>
        </ul>
      </div>

      <div className="Populares">
        <h4>Mais populares</h4>
        <ul> 
          <li> 
          <img src={require('./images/post1.png')} ></img>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           standard dummy text ever</p>

          </li>
          <li> 
          <img src={require('./images/post.png')} ></img>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           standard dummy text ever</p>

          </li>
          
        </ul>
      </div>
      

     </div>



     <div className="Postagens"> 
      <div className="Categorias"> 
      <img src={require('./images/b1.png')} ></img>
      <img src={require('./images/b2.png')} ></img>
      <img src={require('./images/b3.png')} ></img>
       </div>

       {this.state.nutri.map((item) =>{ 
        return ( 
          <div className="PostagensBlog">
          <article key={item.id} className="Post">
            <h3 className="Titulo"> {item.titulo}</h3> 
            <img src={item.capa} className="Capa"></img>
            <p className="Subtitulo"> {item.subtitulo}</p>
            <button className="Botao">Leia mais...</button> 
          </article>
          </div> 
        )
      })}

</div>
    </div>
  );
}}

export default App;
