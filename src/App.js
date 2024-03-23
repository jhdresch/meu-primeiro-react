import React, { Component } from "react";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: 'Jair',
            idade: 40,
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    diminuir() {
        let state = this.state;
        if (state.contador === 0) {
            alert("Contador chegou a zero !!!");
            return;

        }
        state.contador -= 1;
        this.setState(state)
    }

    aumentar() {
        let state = this.state;
        state.contador += 1;
        this.setState(state)
    }


    render() {
        return (
            <div>
                <h1>Usando State</h1>
                <h2>Nome: {this.state.nome}</h2>
                <h2>Idade: {this.state.idade}</h2>
                <h2>contador</h2>
                <button onClick={this.diminuir}> - </button>{this.state.contador} <button onClick={this.aumentar} > + </button>
            </div>
        );
    }



}

export default App; 