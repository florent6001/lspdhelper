import React from 'react'

export class AmendeType extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom_suspect: '',
            modele_vehicule: '',
            plaque_vehicule: '',
            amendes: '',
            preuves: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        document.getElementById("apercu").innerHTML = document.getElementById("resultat").innerHTML
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
        document.getElementById("apercu").innerHTML = document.getElementById("resultat").innerHTML
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
                    <label htmlFor="amendes">Raison de(s) l'amende(s) :</label>
                    <textarea type="text" id="amendes" name="amendes" value={ this.state.amendes } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="preuves">Preuve(s) :</label>
                    <textarea type="text" id="preuves" name="preuves" value={ this.state.preuves } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="resultat d-none" id="resultat">
                    <span style={{ fontWeight: 'bold' }} >{this.props.data.grade} {this.props.data.nom} {this.props.data.prenom}</span> (<span style={{ fontWeight: 'bold' }} >#{this.props.data.matricule}</span>), le <span style={{ fontWeight: 'bold' }} >{new Date(this.props.data.date).toLocaleDateString('FR-fr') }</span> à <span style={{ fontWeight: 'bold' }} >{this.props.data.heure.replace(':' , "h")}</span> a verbalisé le véhicule <span style={{ fontWeight: 'bold' }} >{this.state.modele_vehicule}</span>, immatriculé <span style={{ fontWeight: 'bold' }} >{this.state.plaque_vehicule}</span>, au nom de <span style={{ fontWeight: 'bold' }} >{this.state.nom_suspect}</span>, sur <span style={{ fontWeight: 'bold' }} >{this.props.data.lieu_interpellation}</span>.<br /><br />
                    <span style={{ fontWeight: 'bold' }} >Amende(s):</span>
                    <span style={{ color: '#27ae60' }}><ul> <div dangerouslySetInnerHTML={{ __html: this.state.amendes.replace(/\r\n|\r|\n/g,"<br />")}}></div>
                    </ul></span>
                    <span style={{ fontWeight: 'bold' }} >Preuves:</span>
                    <br />{this.state.preuves}
                </div>

                <hr className="my-5" />
                <p>Lien pour poster la demande : <a href={"https://mdc-fr.gta.world/record/" + this.state.nom_suspect} target="_blank" rel="noreferrer">https://mdc-fr.gta.world/record/{this.state.nom_suspect}</a></p>
            </>
        )
    }
}