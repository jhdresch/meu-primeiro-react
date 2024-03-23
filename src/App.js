import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        }
    }
    // acionando antes de montar o dom
    componentWillMount() {
        alert('Antes de montar o dom');
    }


    // acionando depois de montar o dom
    componentDidMount() {

        setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);

    }

    // ativa quando componente é atualizado
    componentDidUpdate() {
        console.log('Atualizou hora: ' + this.state.hora);
    }

    // É executado somente quando shouldComponentUpdate devolver true.
    // shouldComponentUpdate() {

    //     console.log('Faz algo caso queira depois de atualizar componnte');
    // }


    // acionando depois de desmontar o dom
    componentWillUnmount() {
        console.log('Dom desmontado')
    }


    render() {
        return (
            <div>
                <h1>Ciclo de vida</h1>
                <h2>Hora: {this.state.hora}</h2>
            </div>
        );
    }
}

export default App;