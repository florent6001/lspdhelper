import React from 'react'

export class ArrestType extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            agents_supplementaires: '',
            nom_suspect: '',
            identifier: '',
            description: '',
            preuves: '',
            description_preuve: ''
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
                    <label htmlFor="agents_supplementaires">Agents supplémentaires</label>
                    <input type="text" id="agents_supplementaires" name="agents_supplementaires" value={ this.state.agents_supplementaires } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mt-3">
                            <label htmlFor="nom_suspect">Prénom_Nom du suspect</label>
                            <input type="text" id="nom_suspect" name="nom_suspect" value={ this.state.nom_suspect } onChange={this.handleChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mt-3">
                            <label htmlFor="identifier">/identifier du suspect</label>
                            <input type="text" id="identifier" name="identifier" value={ this.state.identifier } onChange={this.handleChange} className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="description">Description des faits</label>
                    <textarea id="description" name="description" value={ this.state.description } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="preuves">Preuves (Dashcam / Saisit)</label>
                    <input type="text" id="preuves" name="preuves" value={ this.state.preuves } onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="description_preuve">Description de la preuve</label>
                    <textarea id="description_preuve" name="description_preuve" value={ this.state.description_preuve } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <div className="resultat d-none" id="resultat">
                    <span style={{ fontWeight:'bold' }}>{this.props.data.grade} {this.props.data.prenom} {this.props.data.nom} #{this.props.data.matricule}</span>, le <span style={{ fontWeight:'bold' }}>{new Date(this.props.data.date).toLocaleDateString('fr-FR')}</span> à <span style={{ fontWeight:'bold' }}>{this.props.data.heure.replace(':' , "h")}</span>. Procède à l'interpellation de <span style={{ fontWeight:'bold' }}>{this.state.nom_suspect.replace(/_/g , " ")}</span>, se déroulant sur <span style={{ fontWeight:'bold' }}>{this.props.data.lieu_interpellation}</span>.<br /><br /><u><span style={{ fontWeight:'bold' }}>Description des faits:</span></u><br />{this.state.description}<br /><br /><u><span style={{ fontWeight:'bold' }}>Agents supplémentaires:</span></u><br />{this.state.agents_supplementaires}<br /><br /><u><span style={{ fontWeight:'bold' }}>Preuves de toute forme:</span></u><br />{this.state.preuves}<br /><br /><u><span style={{ fontWeight:'bold' }}>Dashboard Camera:</span></u><br /><span style={{ color: '#9944dd' }}>*</span> {this.state.description_preuve} <span style={{color: '#9944dd' }}>*</span><br /><br /><br /><span style={{ color: '#9944dd' }}>(( </span> <span style={{ fontWeight:'bold' }}>@{this.state.identifier}</span> <span style={{ color: '#9944dd' }}>))</span>
                </div>

                <hr className="my-5" />
                Lien pour poster la demande : <a href={"https://mdc-fr.gta.world/record/" + this.state.nom_suspect}>https://mdc-fr.gta.world/record/{this.state.nom_suspect}</a>
            </>
        )
    }
}