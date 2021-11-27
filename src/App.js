import React from 'react';
import { ArrestType } from './reportType/arrestType'
import { AmendeType } from './reportType/amendeType'
import { FourriereType } from './reportType/fourriereType'
import { TirType } from './reportType/tirType'
import { IncidentType } from './reportType/incidentType';
import { SaisieType } from './reportType/saisieType';
import logo from './img/logo_lspd.png'
export class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            prenom: localStorage.getItem('prenom'), 
            nom: localStorage.getItem('nom'),
            grade: localStorage.getItem('grade'),
            matricule: localStorage.getItem('matricule'),
            rapport_type: 'null',
            resultat: 'Merci de remplir le formulaire.',
            date: new Date().toISOString().slice(0, 10),
            heure: new Date().getHours() + ':' + new Date().getMinutes(),
            lieu_interpellation: '',
            mode: localStorage.getItem('mode')
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    submitButton = () => {
        navigator.clipboard.writeText(document.getElementById("resultat").innerHTML )
        // Remove localstorage
        localStorage.removeItem('prenom');
        localStorage.removeItem('nom');
        localStorage.removeItem('grade');
        localStorage.removeItem('matricule');

        // Add localStorage
        localStorage.setItem('prenom', this.state.prenom);
        localStorage.setItem('nom', this.state.nom);
        localStorage.setItem('grade', this.state.grade);
        localStorage.setItem('matricule', this.state.matricule);
    }

    submitForum = () => {
        var brRegex = /<br\s*?>/gi;
        navigator.clipboard.writeText(document.getElementById("resultat").innerHTML.replace(brRegex, "\r\n"))

        // Remove localstorage
        localStorage.removeItem('prenom');
        localStorage.removeItem('nom');
        localStorage.removeItem('grade');
        localStorage.removeItem('matricule');

        // Add localStorage
        localStorage.setItem('prenom', this.state.prenom);
        localStorage.setItem('nom', this.state.nom);
        localStorage.setItem('grade', this.state.grade);
        localStorage.setItem('matricule', this.state.matricule);
    }

    isDarkMode = () => {
        if(localStorage.getItem('mode') === 'dark') {
            return true;
        } else {
            return false;
        }
    }

    darkMode = (e) => {
        e.preventDefault();
        if(this.isDarkMode()){
            localStorage.removeItem('mode');
            localStorage.setItem('mode', 'light');
            this.setState({
                mode: 'light'
            })
        } else {
            localStorage.removeItem('mode');
            localStorage.setItem('mode', 'dark');
            this.setState({
                mode: 'dark'
            })
        }
    }

    darkCSS = `
        body { background-color: #2a2e33 !important; }
        h1, h2 { color: #fff !important }
        label { color: #fff !important }
        input, select, textarea { background-color: #3C4858 !important; color: #fff !important; border: none !important }
        hr { background-color: #fff !important}
        a { color: #fff !important }
        p { color: #fff !important }
        p.alert { color: black !important }
    `;

    render () {
        return (
            <div className="container mb-5">
                {this.state.mode === 'dark' &&
                    <style>{this.darkCSS}</style>
                }
                <form>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="text-center">
                                <img src={logo} alt="logo LSPD" className="img-fluid" />
                                <h1 className="my-5 h4">Générateur de rapport LSPD</h1>
                            </div>
                            <h2 className="h5">Informations de l'agent</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mt-3">
                                        <label htmlFor="prenom">Prénom</label>
                                        <input type="text" id="prenom" value={ this.state.prenom } onChange={this.handleChange} name="prenom" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mt-3">
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text" id="nom" value={ this.state.nom } onChange={this.handleChange} name="nom" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group mt-3">
                                        <label htmlFor="grade">Grade</label>
                                        <input type="text" id="grade" name="grade" value={ this.state.grade } onChange={this.handleChange} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">  
                                    <div className="form-group mt-3">
                                        <label htmlFor="matricule">Matricule</label>
                                        <input type="text" id="matricule" name="matricule" value={ this.state.matricule } onChange={this.handleChange} className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group mt-3">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" id="date" name="date" value={ this.state.date } onChange={this.handleChange} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mt-3">
                                        <label htmlFor="heure">Heure</label>
                                        <input type="time" id="heure" name="heure" value={ this.state.heure } onChange={this.handleChange} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mt-3">
                                        <label htmlFor="lieu_interpellation">Lieu</label>
                                        <input type="text" id="lieu_interpellation" name="lieu_interpellation" value={ this.state.lieu_interpellation } onChange={this.handleChange} className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <select className="form-select mt-3" value={this.state.rapport_type} onChange={this.handleChange} name="rapport_type">
                                <option value="null">Sélectionner un type de rapport</option>
                                <option value="Arrestation">Rapport d'arrestation</option>
                                <option value="Amende">Rapport d'amende</option>
                                <option value="Fourriere">Rapport de fourrière</option>
                                <option value="Tir">Rapport de tirs</option>
                                <option value="Incident">Rapport d'incident</option>
                                <option value="Saisie">Rapport de saisie</option>
                            </select>

                            <div className="row mt-5">
                                <div className="col">                                 
                                    <p className="alert alert-primary"><span style={{ textDecoration: 'underline' }}>Nouveauté</span> : Tous les formulaires sont maintenant disponible, le darkmode a également été ajouté.</p>
                                </div>
                            </div>

                            <div className="row mt-1">
                                <div className="col">
                                    <p className="alert alert-secondary">Idées d'amélioration par Discord : WaDi#2954</p>
                                </div>
                            </div>

                            <br />

                        </div>

                        <div className="col-md-6">
                            <div className="d-flex justify-content-between">
                                <h2 className="h5">Rapport</h2>
                                <a href="/" onClick={ (e) => this.darkMode(e) }>Activer / Désactiver le mode nuit</a>
                            </div>


                            {this.state.rapport_type === 'Arrestation' &&
                                <ArrestType data={this.state} />
                            }

                            {this.state.rapport_type === 'Amende' &&
                                <AmendeType data={this.state} />
                            }

                            {this.state.rapport_type === 'Fourriere' &&
                                <FourriereType data={this.state} />
                            }

                            {this.state.rapport_type === 'Tir' &&
                                <TirType data={this.state} />
                            }

                            {this.state.rapport_type === 'Incident' &&
                                <IncidentType data={this.state} />
                            }

                            {this.state.rapport_type === 'Saisie' &&
                                <SaisieType data={this.state} />
                            }

                            <hr className="my-5" />

                            {(this.state.rapport_type === 'Arrestation' || this.state.rapport_type === 'Amende' || this.state.rapport_type === 'Fourriere') &&
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-primary" onClick={this.submitButton}>
                                        Copier le code
                                    </button>
                                </div>
                            }

                            {(this.state.rapport_type === 'Tir' || this.state.rapport_type === 'Incident' || this.state.rapport_type === 'Saisie') &&
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-primary" onClick={this.submitForum}>
                                        Copier le code
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}