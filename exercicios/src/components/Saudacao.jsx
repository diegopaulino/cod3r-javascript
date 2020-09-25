import React, { Component } from 'react';

export default class Saudacao extends Component {
    // state = {
    //     tipo: "Fala",
    //     nome: "Pedro"
    // }

    // setTipo(e) {
    //     this.props({ tipo: e.target.value })
    // }

    render() {
        const { tipo, nome } = this.props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} />
                <input type="text" placeholder="Nome..." value={nome} />
            </div>
        )
    }
}