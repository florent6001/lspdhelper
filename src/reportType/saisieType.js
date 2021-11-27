import React from 'react'

export class SaisieType extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            numero_saisit: '',
            identite_suspect: '',
            contexte_saisit: '',
            biens_saisit: ''
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
                <div className="form-group">
                    <label htmlFor="numero_saisit">Numéro de la saisie (EL/1/X/X)</label>
                    <input type="text" id="numero_saisit" name="numero_saisit" value={ this.state.numero_saisit } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="identite_suspect">Identité du suspect</label>
                    <input type="text" id="identite_suspect" name="identite_suspect" value={ this.state.identite_suspect } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="contexte_saisit">Contexte de la saisie</label>
                    <textarea type="text" id="contexte_saisit" name="contexte_saisit" value={ this.state.contexte_saisit } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="biens_saisit">Liste des biens saisit</label>
                    <textarea type="text" id="biens_saisit" name="biens_saisit" value={ this.state.biens_saisit } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <div className="resultat d-none" id="resultat">
                [saisie={this.state.numero_saisit}]<br />
                [b]Lieu, date et heure des faits :[/b] [i]{this.props.data.lieu_interpellation}, le {new Date(this.props.data.date).toLocaleDateString('fr-FR')} à {this.props.data.heure.replace(':' , "h")}[/i] <br /><br />

                [b]Identité du suspect :[/b] [i]{this.state.identite_suspect}[/i] <br />
                [b]Contexte de la saisie :[/b] [i]{this.state.contexte_saisit}[/i] <br /><br />

                [b]Biens saisis :[/b] <br />
                [i]{this.state.biens_saisit}[/i]
                </div>

                <hr className="my-5" />
                Lien pour poster la demande : <a href={"https://pd.gta.world/posting.php?mode=post&f=815"}>https://pd.gta.world/posting.php?mode=post&f=815</a>
            </>
        )
    }
}