import React from 'react'

export class ArrestType extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom_suspect: '',
            identifier: '',
            description: '',
            description_preuve: '',
            plaider_coupable: '',
            temps_amende: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        document.getElementById("apercu").innerHTML = document.getElementById("resultat").innerHTML
    }
    
    handleChange(e) {
        if(e.target.type == 'checkbox')
        {
            const name = e.target.name;
            this.setState({
                [name]: e.target.checked
            })
        }
        else
        {
            const name = e.target.name
            this.setState({
                [name]: e.target.value
            })
        }
        document.getElementById("apercu").innerHTML = document.getElementById("resultat").innerHTML
    }

    render () {
        return (
            <>
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
                    <label htmlFor="description">Texte du rapport</label>
                    <textarea id="description" name="description" value={ this.state.description } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="description_preuve">Description des preuves (( /do ))</label>
                    <textarea id="description_preuve" name="description_preuve" value={ this.state.description_preuve } onChange={this.handleChange} className="form-control"></textarea>
                </div>

                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" name="plaider_coupable" id="plaider_coupable" onChange={ this.handleChange } value="true" />
                    <label class="form-check-label" htmlFor="plaider_coupable">
                        Accord de plaider coupable accepté.
                    </label>
                </div>


                {this.state.plaider_coupable === true &&
                    <div className="form-group mt-3">
                        <label htmlFor="temps_amende">Temps de prison et amende</label>
                        <input type="text" id="temps_amende" name="temps_amende" value={ this.state.temps_amende } onChange={this.handleChange} className="form-control" />
                    </div>
                }



                <div className="resultat d-none" id="resultat">
                    <span style={{ fontWeight:'bold' }}>{this.props.data.grade} {this.props.data.prenom} {this.props.data.nom} #{this.props.data.matricule}</span>, le <span style={{ fontWeight:'bold' }}>{new Date(this.props.data.date).toLocaleDateString('fr-FR', {day: "numeric"})}/{ new Date(this.props.data.date).toLocaleDateString('fr-FR', {month: "short"}).substring(0, 3).toUpperCase() }/
                    {new Date(this.props.data.date).toLocaleDateString('fr-FR', {year: "numeric"})}</span> à <span style={{ fontWeight:'bold' }}>{this.props.data.heure.replace(':' , "h")}</span>. Procède à l'interpellation de <span style={{ fontWeight:'bold' }}>{this.state.nom_suspect.replace(/_/g , " ")}</span>, se déroulant sur <span style={{ fontWeight:'bold' }}>{this.props.data.lieu_interpellation}</span>.<br /><br />{this.state.description}<br /><br />
                    
                    {this.state.plaider_coupable === true &&
                        <span style={{ color: '#9944dd' }}>** {this.state.nom_suspect.replace(/_/g , " ")} a accepté l'accord de plaider coupable suivant : {this.state.temps_amende} **<br /></span>
                    }
                    <span style={{ color: '#9944dd' }}>** {this.state.description_preuve}**</span><br /><br /><br /><span style={{ color: '#9944dd' }}>(( </span> <span style={{ fontWeight:'bold' }}>@{this.state.identifier}</span> <span style={{ color: '#9944dd' }}>))</span>
                </div>

                <hr className="my-5" />
                <p>Lien pour poster le rapport : <a href={"https://mdc-fr.gta.world/record/" + this.state.nom_suspect} target="_blank" rel="noreferrer">https://mdc-fr.gta.world/record/{this.state.nom_suspect}</a></p>

                {this.state.plaider_coupable === true &&
                    <p><br />Lien pour poster la demande de mise en accusation : <a href={"https://forum-fr.gta.world/forum/201-demandes-de-mise-en-accusation/?do=add&title=Demande%20de%20mise%20en%20accusation%20-%20" + this.state.nom_suspect} target="_blank" rel="noreferrer">https://forum-fr.gta.world/forum/201-demandes-de-mise-en-accusation/?do=add&title=Demande%20de%20mise%20en%20accusation%20-%20{this.state.nom_suspect}</a></p>
                }
            </>
        )
    }
}