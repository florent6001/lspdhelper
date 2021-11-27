import React from 'react'

export class FourriereType extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom_suspect: '',
            modele_vehicule: '',
            plaque_vehicule: '',
            raison: '',
            duree: ''
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
                    <label htmlFor="nom_suspect">Prénom_Nom de l'individu</label>
                    <input type="text" id="nom_suspect" name="nom_suspect" value={ this.state.nom_suspect } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="modele_vehicule">Marque et modèle du véhicule</label>
                    <input type="text" id="modele_vehicule" name="modele_vehicule" value={ this.state.modele_vehicule } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="plaque_vehicule">Plaque du véhicule</label>
                    <input type="text" id="plaque_vehicule" name="plaque_vehicule" value={ this.state.plaque_vehicule } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="raison">Raison de la mise en Fourriere :</label>
                    <textarea type="text" id="raison" name="raison" value={ this.state.raison } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="duree">Durée (en jours) :</label>
                    <input type="number" id="duree" name="duree" value={ this.state.duree } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="resultat d-none" id="resultat">
                    <span style={{ fontWeight: 'bold' }}>{this.props.data.grade} {this.props.data.nom} {this.props.data.prenom}</span> (<span style={{ fontWeight: 'bold' }}>#{this.props.data.matricule}</span>),  le <span style={{ fontWeight: 'bold' }}>{new Date(this.props.data.date).toLocaleDateString('FR-fr') }</span> à <span style={{ fontWeight: 'bold' }}>{this.props.data.heure.replace(':' , "h")}</span>. <br />Met en fourrière le véhicule  <span style={{ fontWeight: 'bold' }}>{this.state.modele_vehicule}</span>, immatriculé <span style={{ fontWeight: 'bold' }}>{this.state.plaque_vehicule}</span>, pour une durée de <span style={{ fontWeight: 'bold' }}>{this.state.duree}</span> jours, enregistré au nom de  <span style={{ fontWeight: 'bold' }}>{this.state.nom_suspect}</span>, sur <span style={{ fontWeight: 'bold' }}>{this.props.data.lieu_interpellation}</span>.<br /><br />

                    <span style={{ fontWeight: 'bold' }}>Raison de la mise en fourrière:</span>
                    <ul><li><div dangerouslySetInnerHTML={{ __html: this.state.raison.replace(/\r\n|\r|\n/g,"<br />")}}></div></li></ul>
                </div>

                <hr className="my-5" />
                <p>Lien pour poster la demande : <a href={"https://mdc-fr.gta.world/record/" + this.state.nom_suspect} target="_blank" rel="noreferrer">https://mdc-fr.gta.world/record/{this.state.nom_suspect}</a></p>
            </>
        )
    }
}