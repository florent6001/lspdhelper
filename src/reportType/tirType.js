import React from 'react'

export class TirType extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            arme_utilisee: '',
            nombre_tirs: '',
            agents_presents: '',
            rapport_faits: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    render () {
        return (
            <>
                <div className="form-group mt-3">
                    <label htmlFor="arme_utilisee">Arme utilisée</label>
                    <input type="text" id="arme_utilisee" name="arme_utilisee" value={ this.state.arme_utilisee } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="nombre_tirs">Nombres de tirs</label>
                    <input type="number" id="nombre_tirs" name="nombre_tirs" value={ this.state.nombre_tirs } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="agents_presents">Autre agents présents</label>
                    <input type="text" id="agents_presents" name="agents_presents" value={ this.state.agents_presents } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="rapport_faits">Rapport des faits</label>
                    <textarea type="text" id="rapport_faits" name="rapport_faits" value={ this.state.rapport_faits } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="resultat d-none" id="resultat">
                    [rapport-tirs1][b]Grade et échelon :[/b] {this.props.data.grade} <br />
                    [b]Date et heure des faits :[/b] Le {new Date(this.props.data.date).toLocaleDateString('FR-fr') } à {this.props.data.heure.replace(':' , "h")} <br />
                    [b]Lieu :[/b] {this.props.data.lieu_interpellation} <br />
                    [b]Arme utilisée :[/b] {this.state.arme_utilisee} <br />
                    [b]Nombre de tirs :[/b] {this.state.nombre_tirs} cartouches<br />
                    [b]Agents présents :[/b] {this.state.agents_presents} [/rapport-tirs1] <br />
                    [rapport-tirs2]
                        {this.state.rapport_faits}
                    [/rapport-tirs2]
                </div>

                <hr className="my-5" />
                <p>Lien pour poster la demande : <a href={"https://pd.gta.world/posting.php?mode=post&f=220"}>https://pd.gta.world/posting.php?mode=post&f=220</a></p>
            </>
        )
    }
}