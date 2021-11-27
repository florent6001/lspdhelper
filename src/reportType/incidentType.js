import React from 'react'

export class IncidentType extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nombre_douilles: 'Néant',
            categorie_arme: 'Néant',
            analyse_criminologique: 'Néant',
            identite_victimes: 'Néant',
            cause_deces: 'Néant',
            suspect_temoins: 'Néant',
            section_annexe: '',
            rapport_detaille: ''
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
                    <label htmlFor="rapport_detaille">Rapport détaillé (contexte, déroulement, conclusion)</label>
                    <textarea type="text" id="rapport_detaille" name="rapport_detaille" value={ this.state.rapport_detaille } onChange={this.handleChange} className="form-control"></textarea>
                </div>
                <p className="lead mb-2 mt-3">Section des douilles</p>
                <div className="form-group">
                    <label htmlFor="nombre_douilles">Nombre de douilles saisit</label>
                    <input type="text" id="nombre_douilles" name="nombre_douilles" value={ this.state.nombre_douilles } onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group mt-3 ">
                    <label htmlFor="categorie_arme">Catégorisation de l'arme</label>
                    <input type="text" id="categorie_arme" name="categorie_arme" value={ this.state.categorie_arme } onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group mt-3 ">
                    <label htmlFor="analyse_criminologique">Analyse criminologique</label>
                    <textarea type="text" id="analyse_criminologique" name="analyse_criminologique" value={ this.state.analyse_criminologique } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <p className="lead mb-2 mt-3">Section des victimes</p>
                <div className="form-group">
                    <label htmlFor="identite_victimes">Identité de la victime</label>
                    <input type="text" id="identite_victimes" name="identite_victimes" value={ this.state.identite_victimes } onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group mt-3 ">
                    <label htmlFor="cause_deces">Cause du décès</label>
                    <input type="text" id="cause_deces" name="cause_deces" value={ this.state.cause_deces } onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group mt-3 ">
                    <label htmlFor="suspect_temoins">Suspects / Témoins</label>
                    <input type="text" id="suspect_temoins" name="suspect_temoins" value={ this.state.suspect_temoins } onChange={this.handleChange} className="form-control" />
                </div>

                <p className="lead mb-2 mt-3">Section annexes</p>
                <div className="form-group mt-3 ">
                    <label htmlFor="section_annexe">Eventuelles photographies ou pièces jointes</label>
                    <textarea type="text" id="section_annexe" name="section_annexe" value={ this.state.section_annexe } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <div className="resultat d-none" id="resultat">
                [rapport-inc1][b]Prénom et nom :[/b] {this.props.data.nom} {this.props.data.prenom} <br />
                    [b]Grade et échelon :[/b] {this.props.data.grade} <br />
                    [b]Date et heure des faits :[/b] Le {new Date(this.props.data.date).toLocaleDateString('FR-fr') } à {this.props.data.heure.replace(':' , "h")} <br />
                    [b]Lieu :[/b] {this.props.data.lieu_interpellation}[/rapport-inc1] <br />
                    [rapport-inc2]<br />
                    {this.state.rapport_detaille} <br /><br />
                    [hr][/hr]<br />
                    [size=120]SECTION DES DOUILLES[/size] <br />
                    [b]Nombre d'éléments saisis :[/b] {this.state.nombre_douilles} <br />
                    [b]Catégorisations des éléments :[/b] {this.state.categorie_arme} <br />
                    [b]Analyse criminologique :[/b] {this.state.analyse_criminologique} <br />
                    [hr][/hr] <br />
                    [size=120]SECTION DES VICTIMES[/size] <br />
                    [b]Identité de la victime :[/b] {this.state.identite_victimes} <br />
                    [b]Cause du décès :[/b] {this.state.cause_deces} <br />
                    [b]Suspects / témoins :[/b] {this.state.suspect_temoins} <br />
                    [hr][/hr] <br />
                    [size=120]SECTION ANNEXE[/size] <br />
                    {this.state.section_annexe}<br />
                [/rapport-inc2]
                </div>

                <hr className="my-5" />
                <p>Lien pour poster la demande : <a href={"https://pd.gta.world/posting.php?mode=post&f=220"} target="_blank" rel="noreferrer">https://pd.gta.world/posting.php?mode=post&f=220</a></p>
            </>
        )
    }
}