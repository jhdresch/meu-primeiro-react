import React, { Component } from "react";

class Feed extends Component {




    render() {

        let curtida = "Curtida"
        return (
            <div>
                <hr></hr>
                <h3> Seu id é {this.props.id}</h3>
                <h3> Seu nome é {this.props.nome}</h3>
                <h3> {this.props.curtidas > 1 ? 'Curtidas ' + this.props.curtidas : 'Curtida ' + this.props.curtidas} </h3>
            </div>
        );
    }

    componentDidMount() {



    }

}

export default Feed;