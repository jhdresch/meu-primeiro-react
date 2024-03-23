import React, { Component } from "react";



class Equipe2 extends Component {
  render() {
    return (
      <div>
        <h1> usando classe</h1>
        <h2>meu cardo é {this.props.cargo}</h2>
      </div>
    );
  }
}


const BemVindo = (props) => <h2>Bem Vindo {props.nome}</h2>

const BemVindo2 = (props) => {
  return (
    <div>
      <h2>Bem Vindo 2 {props.nome1}</h2>
      <h1>Bem Vindo 2 {props.nome2}</h1>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h3>Meu nome é {props.nome}.  </h3>
      <h4>Minha idade é {props.idade} anos.</h4>
      <h4>Cargo: {props.cargo}.</h4>
    </div>
  );
}

const Equipe = (props) => {
  return (
    <Sobre nome={props.nome} idade={props.idade} cargo={props.cargo} />
  );
}

function App() {
  return (

    <><div>
      <h1>Ola Mundo</h1>
      <BemVindo nome='Jair' />
      <BemVindo2 nome1='Maria' nome2='Jose' />
    </div>
      <div>
        <h1>Conheça nossa equipe</h1>
        <Equipe nome="Jair" idade="40" cargo="TL" />

      </div></>


  );

}



export default App;