import Feed from "components/Feed";
import React, { Component } from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, nome: 'Jair', curtidas: 564647 },
                { id: 2, nome: 'Maria', curtidas: 40 },
                { id: 3, nome: 'Tamara', curtidas: 321321 },
                { id: 4, nome: 'Joaquina', curtidas: 45 },
                { id: 5, nome: 'Marizete', curtidas: 1111 },
                { id: 6, nome: 'Renata', curtidas: 1 }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Feeds</h1>
                {
                    this.state.feed.map((item) => {
                        return (
                            <div key={item.id}>
                                <Feed id={item.id} nome={item.nome} curtidas={item.curtidas} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }

}
export default App;