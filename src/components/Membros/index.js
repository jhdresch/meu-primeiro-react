import React, { Component } from "react";


class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membro: props.membro
        }
        this.novoUsuario = this.novoUsuario.bind(this);


    }

    novoUsuario() {
        this.setState({ membro: 'Jair' })
    }



    render(props) {
        return (
            <div>
                <h1>Membro componente</h1>
                <h3>Bem vindo: {this.state.membro}</h3>
                <button onClick={this.novoUsuario}>
                    Entrar como Jair
                </button>
                <button onClick={() => {
                    this.setState({ membro: 'Visitante' })
                }}>
                    Sair
                </button>
            </div>
        );
    }


}

export default Membro;