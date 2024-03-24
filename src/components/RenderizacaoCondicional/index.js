import React, { Component } from "react";

class RenderizacaoCondicional extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 1,
            statusBoolean: false
        }
        this.entrar = this.entrar.bind(this);

    }

    entrar() {
        this.setState({ statusBoolean: true })
    }


    render() {
        return (
            <div>
                <h1>Renderizacao Condicional</h1>
                <h2>sistema de login</h2>
                {
                    this.state.status === 1 &&
                    <h3>Bem vindo Sistema</h3>

                }

                <h1>Renderizacao Condicional 2</h1>


                {
                    this.state.statusBoolean ?
                        <div>
                            <h3>Sistema Logado</h3>
                            <button onClick={() => this.setState({ statusBoolean: false })}>Sair</button>
                        </div>
                        :
                        <div>
                            <h3>Sistema Deslogado</h3>
                            <button onClick={this.entrar}>Entrar</button>
                        </div>
                }

            </div>
        );
    }
}

export default RenderizacaoCondicional;