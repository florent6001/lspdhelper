(this.webpackJsonplspdhelper=this.webpackJsonplspdhelper||[]).push([[0],{15:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),n=s(9),i=s.n(n),l=s(3),c=s(4),o=s(5),d=s(2),h=s(7),m=s(6),j=s(0),p=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={agents_supplementaires:"",nom_suspect:"",identifier:"",description:"",preuves:"",description_preuve:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(s,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"agents_supplementaires",children:"Agents suppl\xe9mentaires"}),Object(j.jsx)("input",{type:"text",id:"agents_supplementaires",name:"agents_supplementaires",value:this.state.agents_supplementaires,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"nom_suspect",children:"Pr\xe9nom_Nom du suspect"}),Object(j.jsx)("input",{type:"text",id:"nom_suspect",name:"nom_suspect",value:this.state.nom_suspect,onChange:this.handleChange,className:"form-control"})]})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"identifier",children:"/identifier du suspect"}),Object(j.jsx)("input",{type:"text",id:"identifier",name:"identifier",value:this.state.identifier,onChange:this.handleChange,className:"form-control"})]})})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"description",children:"Description des faits"}),Object(j.jsx)("textarea",{id:"description",name:"description",value:this.state.description,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"preuves",children:"Preuves (Dashcam / Saisit)"}),Object(j.jsx)("input",{type:"text",id:"preuves",name:"preuves",value:this.state.preuves,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"description_preuve",children:"Description de la preuve"}),Object(j.jsx)("textarea",{id:"description_preuve",name:"description_preuve",value:this.state.description_preuve,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"resultat d-none",id:"resultat",children:[Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:[this.props.data.grade," ",this.props.data.prenom," ",this.props.data.nom," #",this.props.data.matricule]}),", le ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:new Date(this.props.data.date).toLocaleDateString("fr-FR")})," \xe0 ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.props.data.heure.replace(":","h")}),". Proc\xe8de \xe0 l'interpellation de ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.nom_suspect.replace(/_/g," ")}),", se d\xe9roulant sur ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.props.data.lieu_interpellation}),".",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("u",{children:Object(j.jsx)("span",{style:{fontWeight:"bold"},children:"Description des faits:"})}),Object(j.jsx)("br",{}),this.state.description,Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("u",{children:Object(j.jsx)("span",{style:{fontWeight:"bold"},children:"Agents suppl\xe9mentaires:"})}),Object(j.jsx)("br",{}),this.state.agents_supplementaires,Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("u",{children:Object(j.jsx)("span",{style:{fontWeight:"bold"},children:"Preuves de toute forme:"})}),Object(j.jsx)("br",{}),this.state.preuves,Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("u",{children:Object(j.jsx)("span",{style:{fontWeight:"bold"},children:"Dashboard Camera:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{color:"#9944dd"},children:"*"})," ",this.state.description_preuve," ",Object(j.jsx)("span",{style:{color:"#9944dd"},children:"*"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{color:"#9944dd"},children:"(( "})," ",Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:["@",this.state.identifier]})," ",Object(j.jsx)("span",{style:{color:"#9944dd"},children:"))"})]}),Object(j.jsx)("hr",{className:"my-5"}),Object(j.jsxs)("p",{children:["Lien pour poster la demande : ",Object(j.jsxs)("a",{href:"https://mdc-fr.gta.world/record/"+this.state.nom_suspect,children:["https://mdc-fr.gta.world/record/",this.state.nom_suspect]})," ",Object(j.jsx)("br",{}),"Lien pour poster la demande de mise en accusation : ",Object(j.jsx)("a",{href:"https://forum-fr.gta.world/forum/201-demandes-de-mise-en-accusation/?do=add",children:"https://forum-fr.gta.world/forum/201-demandes-de-mise-en-accusation/?do=add"})]})]})}}]),s}(r.a.Component),b=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={nom_suspect:"",modele_vehicule:"",plaque_vehicule:"",amendes:"",preuves:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(s,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"nom_suspect",children:"Pr\xe9nom_Nom de l'individu"}),Object(j.jsx)("input",{type:"text",id:"nom_suspect",name:"nom_suspect",value:this.state.nom_suspect,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"modele_vehicule",children:"Marque et mod\xe8le du v\xe9hicule"}),Object(j.jsx)("input",{type:"text",id:"modele_vehicule",name:"modele_vehicule",value:this.state.modele_vehicule,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"plaque_vehicule",children:"Plaque du v\xe9hicule"}),Object(j.jsx)("input",{type:"text",id:"plaque_vehicule",name:"plaque_vehicule",value:this.state.plaque_vehicule,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"amendes",children:"Raison de(s) l'amende(s) :"}),Object(j.jsx)("textarea",{type:"text",id:"amendes",name:"amendes",value:this.state.amendes,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"preuves",children:"Preuve(s) :"}),Object(j.jsx)("textarea",{type:"text",id:"preuves",name:"preuves",value:this.state.preuves,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"resultat d-none",id:"resultat",children:[Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:[this.props.data.grade," ",this.props.data.nom," ",this.props.data.prenom]})," (",Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:["#",this.props.data.matricule]}),"), le ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:new Date(this.props.data.date).toLocaleDateString("FR-fr")})," \xe0 ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.props.data.heure.replace(":","h")})," a verbalis\xe9 le v\xe9hicule ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.modele_vehicule}),", immatricul\xe9 ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.plaque_vehicule}),", au nom de ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.nom_suspect}),", sur ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.props.data.lieu_interpellation}),".",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontWeight:"bold"},children:"Amende(s):"}),Object(j.jsx)("span",{style:{color:"#27ae60"},children:Object(j.jsxs)("ul",{children:[" ",Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.amendes.replace(/\r\n|\r|\n/g,"<br />")}})]})}),Object(j.jsx)("span",{style:{fontWeight:"bold"},children:"Preuves:"}),Object(j.jsx)("br",{}),this.state.preuves]}),Object(j.jsx)("hr",{className:"my-5"}),Object(j.jsxs)("p",{children:["Lien pour poster la demande : ",Object(j.jsxs)("a",{href:"https://mdc-fr.gta.world/record/"+this.state.nom_suspect,children:["https://mdc-fr.gta.world/record/",this.state.nom_suspect]})]})]})}}]),s}(r.a.Component),u=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={nom_suspect:"",modele_vehicule:"",plaque_vehicule:"",raison:"",duree:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(s,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"nom_suspect",children:"Pr\xe9nom_Nom de l'individu"}),Object(j.jsx)("input",{type:"text",id:"nom_suspect",name:"nom_suspect",value:this.state.nom_suspect,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"modele_vehicule",children:"Marque et mod\xe8le du v\xe9hicule"}),Object(j.jsx)("input",{type:"text",id:"modele_vehicule",name:"modele_vehicule",value:this.state.modele_vehicule,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"plaque_vehicule",children:"Plaque du v\xe9hicule"}),Object(j.jsx)("input",{type:"text",id:"plaque_vehicule",name:"plaque_vehicule",value:this.state.plaque_vehicule,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"raison",children:"Raison de la mise en Fourriere :"}),Object(j.jsx)("textarea",{type:"text",id:"raison",name:"raison",value:this.state.raison,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"duree",children:"Dur\xe9e (en jours) :"}),Object(j.jsx)("input",{type:"number",id:"duree",name:"duree",value:this.state.duree,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"resultat d-none",id:"resultat",children:[Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:[this.props.data.grade," ",this.props.data.nom," ",this.props.data.prenom]})," (",Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:["#",this.props.data.matricule]}),"),  le ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:new Date(this.props.data.date).toLocaleDateString("FR-fr")})," \xe0 ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.props.data.heure.replace(":","h")}),". ",Object(j.jsx)("br",{}),"Met en fourri\xe8re le v\xe9hicule  ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.modele_vehicule}),", immatricul\xe9 ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.plaque_vehicule}),", pour une dur\xe9e de ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.duree})," jours, enregistr\xe9 au nom de  ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.state.nom_suspect}),", sur ",Object(j.jsx)("span",{style:{fontWeight:"bold"},children:this.props.data.lieu_interpellation}),".",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontWeight:"bold"},children:"Raison de la mise en fourri\xe8re:"}),Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.raison.replace(/\r\n|\r|\n/g,"<br />")}})})})]}),Object(j.jsx)("hr",{className:"my-5"}),Object(j.jsxs)("p",{children:["Lien pour poster la demande : ",Object(j.jsxs)("a",{href:"https://mdc-fr.gta.world/record/"+this.state.nom_suspect,children:["https://mdc-fr.gta.world/record/",this.state.nom_suspect]})]})]})}}]),s}(r.a.Component),x=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={arme_utilisee:"",nombre_tirs:"",agents_presents:"",rapport_faits:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(s,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"arme_utilisee",children:"Arme utilis\xe9e"}),Object(j.jsx)("input",{type:"text",id:"arme_utilisee",name:"arme_utilisee",value:this.state.arme_utilisee,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"nombre_tirs",children:"Nombres de tirs"}),Object(j.jsx)("input",{type:"number",id:"nombre_tirs",name:"nombre_tirs",value:this.state.nombre_tirs,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"agents_presents",children:"Autre agents pr\xe9sents"}),Object(j.jsx)("input",{type:"text",id:"agents_presents",name:"agents_presents",value:this.state.agents_presents,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"rapport_faits",children:"Rapport des faits"}),Object(j.jsx)("textarea",{type:"text",id:"rapport_faits",name:"rapport_faits",value:this.state.rapport_faits,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"resultat d-none",id:"resultat",children:["[rapport-tirs1][b]Grade et \xe9chelon :[/b] ",this.props.data.grade," ",Object(j.jsx)("br",{}),"[b]Date et heure des faits :[/b] Le ",new Date(this.props.data.date).toLocaleDateString("FR-fr")," \xe0 ",this.props.data.heure.replace(":","h")," ",Object(j.jsx)("br",{}),"[b]Lieu :[/b] ",this.props.data.lieu_interpellation," ",Object(j.jsx)("br",{}),"[b]Arme utilis\xe9e :[/b] ",this.state.arme_utilisee," ",Object(j.jsx)("br",{}),"[b]Nombre de tirs :[/b] ",this.state.nombre_tirs," cartouches",Object(j.jsx)("br",{}),"[b]Agents pr\xe9sents :[/b] ",this.state.agents_presents," [/rapport-tirs1] ",Object(j.jsx)("br",{}),"[rapport-tirs2]",this.state.rapport_faits,"[/rapport-tirs2]"]}),Object(j.jsx)("hr",{className:"my-5"}),Object(j.jsxs)("p",{children:["Lien pour poster la demande : ",Object(j.jsx)("a",{href:"https://pd.gta.world/posting.php?mode=post&f=220",children:"https://pd.gta.world/posting.php?mode=post&f=220"})]})]})}}]),s}(r.a.Component),O=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={nombre_douilles:"N\xe9ant",categorie_arme:"N\xe9ant",analyse_criminologique:"N\xe9ant",identite_victimes:"N\xe9ant",cause_deces:"N\xe9ant",suspect_temoins:"N\xe9ant",section_annexe:"",rapport_detaille:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(s,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"rapport_detaille",children:"Rapport d\xe9taill\xe9 (contexte, d\xe9roulement, conclusion)"}),Object(j.jsx)("textarea",{type:"text",id:"rapport_detaille",name:"rapport_detaille",value:this.state.rapport_detaille,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsx)("p",{className:"lead mb-2 mt-3",children:"Section des douilles"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"nombre_douilles",children:"Nombre de douilles saisit"}),Object(j.jsx)("input",{type:"text",id:"nombre_douilles",name:"nombre_douilles",value:this.state.nombre_douilles,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3 ",children:[Object(j.jsx)("label",{htmlFor:"categorie_arme",children:"Cat\xe9gorisation de l'arme"}),Object(j.jsx)("input",{type:"text",id:"categorie_arme",name:"categorie_arme",value:this.state.categorie_arme,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3 ",children:[Object(j.jsx)("label",{htmlFor:"analyse_criminologique",children:"Analyse criminologique"}),Object(j.jsx)("textarea",{type:"text",id:"analyse_criminologique",name:"analyse_criminologique",value:this.state.analyse_criminologique,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsx)("p",{className:"lead mb-2 mt-3",children:"Section des victimes"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"identite_victimes",children:"Identit\xe9 de la victime"}),Object(j.jsx)("input",{type:"text",id:"identite_victimes",name:"identite_victimes",value:this.state.identite_victimes,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3 ",children:[Object(j.jsx)("label",{htmlFor:"cause_deces",children:"Cause du d\xe9c\xe8s"}),Object(j.jsx)("input",{type:"text",id:"cause_deces",name:"cause_deces",value:this.state.cause_deces,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3 ",children:[Object(j.jsx)("label",{htmlFor:"suspect_temoins",children:"Suspects / T\xe9moins"}),Object(j.jsx)("input",{type:"text",id:"suspect_temoins",name:"suspect_temoins",value:this.state.suspect_temoins,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsx)("p",{className:"lead mb-2 mt-3",children:"Section annexes"}),Object(j.jsxs)("div",{className:"form-group mt-3 ",children:[Object(j.jsx)("label",{htmlFor:"section_annexe",children:"Eventuelles photographies ou pi\xe8ces jointes"}),Object(j.jsx)("textarea",{type:"text",id:"section_annexe",name:"section_annexe",value:this.state.section_annexe,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"resultat d-none",id:"resultat",children:["[rapport-inc1][b]Pr\xe9nom et nom :[/b] ",this.props.data.nom," ",this.props.data.prenom," ",Object(j.jsx)("br",{}),"[b]Grade et \xe9chelon :[/b] ",this.props.data.grade," ",Object(j.jsx)("br",{}),"[b]Date et heure des faits :[/b] Le ",new Date(this.props.data.date).toLocaleDateString("FR-fr")," \xe0 ",this.props.data.heure.replace(":","h")," ",Object(j.jsx)("br",{}),"[b]Lieu :[/b] ",this.props.data.lieu_interpellation,"[/rapport-inc1] ",Object(j.jsx)("br",{}),"[rapport-inc2]",Object(j.jsx)("br",{}),this.state.rapport_detaille," ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"[hr][/hr]",Object(j.jsx)("br",{}),"[size=120]SECTION DES DOUILLES[/size] ",Object(j.jsx)("br",{}),"[b]Nombre d'\xe9l\xe9ments saisis :[/b] ",this.state.nombre_douilles," ",Object(j.jsx)("br",{}),"[b]Cat\xe9gorisations des \xe9l\xe9ments :[/b] ",this.state.categorie_arme," ",Object(j.jsx)("br",{}),"[b]Analyse criminologique :[/b] ",this.state.analyse_criminologique," ",Object(j.jsx)("br",{}),"[hr][/hr] ",Object(j.jsx)("br",{}),"[size=120]SECTION DES VICTIMES[/size] ",Object(j.jsx)("br",{}),"[b]Identit\xe9 de la victime :[/b] ",this.state.identite_victimes," ",Object(j.jsx)("br",{}),"[b]Cause du d\xe9c\xe8s :[/b] ",this.state.cause_deces," ",Object(j.jsx)("br",{}),"[b]Suspects / t\xe9moins :[/b] ",this.state.suspect_temoins," ",Object(j.jsx)("br",{}),"[hr][/hr] ",Object(j.jsx)("br",{}),"[size=120]SECTION ANNEXE[/size] ",Object(j.jsx)("br",{}),this.state.section_annexe,Object(j.jsx)("br",{}),"[/rapport-inc2]"]}),Object(j.jsx)("hr",{className:"my-5"}),Object(j.jsxs)("p",{children:["Lien pour poster la demande : ",Object(j.jsx)("a",{href:"https://pd.gta.world/posting.php?mode=post&f=220",children:"https://pd.gta.world/posting.php?mode=post&f=220"})]})]})}}]),s}(r.a.Component),g=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={numero_saisit:"",identite_suspect:"",contexte_saisit:"",biens_saisit:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(s,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"numero_saisit",children:"Num\xe9ro de la saisie (EL/1/X/X)"}),Object(j.jsx)("input",{type:"text",id:"numero_saisit",name:"numero_saisit",value:this.state.numero_saisit,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"identite_suspect",children:"Identit\xe9 du suspect"}),Object(j.jsx)("input",{type:"text",id:"identite_suspect",name:"identite_suspect",value:this.state.identite_suspect,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"contexte_saisit",children:"Contexte de la saisie"}),Object(j.jsx)("textarea",{type:"text",id:"contexte_saisit",name:"contexte_saisit",value:this.state.contexte_saisit,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"biens_saisit",children:"Liste des biens saisit"}),Object(j.jsx)("textarea",{type:"text",id:"biens_saisit",name:"biens_saisit",value:this.state.biens_saisit,onChange:this.handleChange,className:"form-control"})]}),Object(j.jsxs)("div",{className:"resultat d-none",id:"resultat",children:["[saisie=",this.state.numero_saisit,"]",Object(j.jsx)("br",{}),"[b]Lieu, date et heure des faits :[/b] [i]",this.props.data.lieu_interpellation,", le ",new Date(this.props.data.date).toLocaleDateString("fr-FR")," \xe0 ",this.props.data.heure.replace(":","h"),"[/i] ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"[b]Identit\xe9 du suspect :[/b] [i]",this.state.identite_suspect,"[/i] ",Object(j.jsx)("br",{}),"[b]Contexte de la saisie :[/b] [i]",this.state.contexte_saisit,"[/i] ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"[b]Biens saisis :[/b] ",Object(j.jsx)("br",{}),"[i]",this.state.biens_saisit,"[/i]"]}),Object(j.jsx)("hr",{className:"my-5"}),Object(j.jsxs)("p",{children:["Lien pour poster la demande : ",Object(j.jsx)("a",{href:"https://pd.gta.world/posting.php?mode=post&f=815",children:"https://pd.gta.world/posting.php?mode=post&f=815"})]})]})}}]),s}(r.a.Component),v=s.p+"static/media/logo_lspd.5fd48b16.png",f=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).submitButton=function(){navigator.clipboard.writeText(document.getElementById("resultat").innerHTML),localStorage.removeItem("prenom"),localStorage.removeItem("nom"),localStorage.removeItem("grade"),localStorage.removeItem("matricule"),localStorage.setItem("prenom",a.state.prenom),localStorage.setItem("nom",a.state.nom),localStorage.setItem("grade",a.state.grade),localStorage.setItem("matricule",a.state.matricule)},a.submitForum=function(){navigator.clipboard.writeText(document.getElementById("resultat").innerHTML.replace(/<br\s*?>/gi,"\r\n")),localStorage.removeItem("prenom"),localStorage.removeItem("nom"),localStorage.removeItem("grade"),localStorage.removeItem("matricule"),localStorage.setItem("prenom",a.state.prenom),localStorage.setItem("nom",a.state.nom),localStorage.setItem("grade",a.state.grade),localStorage.setItem("matricule",a.state.matricule)},a.isDarkMode=function(){return"dark"===localStorage.getItem("mode")},a.darkMode=function(e){e.preventDefault(),a.isDarkMode()?(localStorage.removeItem("mode"),localStorage.setItem("mode","light"),a.setState({mode:"light"})):(localStorage.removeItem("mode"),localStorage.setItem("mode","dark"),a.setState({mode:"dark"}))},a.darkCSS="\n        body { background-color: #2a2e33 !important; }\n        h1, h2 { color: #fff !important }\n        label { color: #fff !important }\n        input, select, textarea { background-color: #3C4858 !important; color: #fff !important; border: none !important }\n        hr { background-color: #fff !important}\n        a { color: #fff !important }\n        p { color: #fff !important }\n        p.alert { color: black !important }\n    ",a.state={prenom:localStorage.getItem("prenom"),nom:localStorage.getItem("nom"),grade:localStorage.getItem("grade"),matricule:localStorage.getItem("matricule"),rapport_type:"null",resultat:"Merci de remplir le formulaire.",date:(new Date).toISOString().slice(0,10),heure:(new Date).getHours()+":"+(new Date).getMinutes(),lieu_interpellation:"",mode:localStorage.getItem("mode")},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(s,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"container mb-5",children:["dark"===this.state.mode&&Object(j.jsx)("style",{children:this.darkCSS}),Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsxs)("div",{className:"col-md-6",children:[Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("img",{src:v,alt:"logo LSPD",className:"img-fluid"}),Object(j.jsx)("h1",{className:"my-5 h4",children:"G\xe9n\xe9rateur de rapport LSPD"})]}),Object(j.jsx)("h2",{className:"h5",children:"Informations de l'agent"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"prenom",children:"Pr\xe9nom"}),Object(j.jsx)("input",{type:"text",id:"prenom",value:this.state.prenom,onChange:this.handleChange,name:"prenom",className:"form-control"})]})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"nom",children:"Nom"}),Object(j.jsx)("input",{type:"text",id:"nom",value:this.state.nom,onChange:this.handleChange,name:"nom",className:"form-control"})]})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"grade",children:"Grade"}),Object(j.jsx)("input",{type:"text",id:"grade",name:"grade",value:this.state.grade,onChange:this.handleChange,className:"form-control"})]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"matricule",children:"Matricule"}),Object(j.jsx)("input",{type:"text",id:"matricule",name:"matricule",value:this.state.matricule,onChange:this.handleChange,className:"form-control"})]})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"date",children:"Date"}),Object(j.jsx)("input",{type:"date",id:"date",name:"date",value:this.state.date,onChange:this.handleChange,className:"form-control"})]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"heure",children:"Heure"}),Object(j.jsx)("input",{type:"time",id:"heure",name:"heure",value:this.state.heure,onChange:this.handleChange,className:"form-control"})]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("label",{htmlFor:"lieu_interpellation",children:"Lieu"}),Object(j.jsx)("input",{type:"text",id:"lieu_interpellation",name:"lieu_interpellation",value:this.state.lieu_interpellation,onChange:this.handleChange,className:"form-control"})]})})]}),Object(j.jsxs)("select",{className:"form-select mt-3",value:this.state.rapport_type,onChange:this.handleChange,name:"rapport_type",children:[Object(j.jsx)("option",{value:"null",children:"S\xe9lectionner un type de rapport"}),Object(j.jsx)("option",{value:"Arrestation",children:"Rapport d'arrestation"}),Object(j.jsx)("option",{value:"Amende",children:"Rapport d'amende"}),Object(j.jsx)("option",{value:"Fourriere",children:"Rapport de fourri\xe8re"}),Object(j.jsx)("option",{value:"Tir",children:"Rapport de tirs"}),Object(j.jsx)("option",{value:"Incident",children:"Rapport d'incident"}),Object(j.jsx)("option",{value:"Saisie",children:"Rapport de saisie"})]}),Object(j.jsx)("div",{className:"row mt-5",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("p",{className:"alert alert-primary",children:[Object(j.jsx)("span",{style:{textDecoration:"underline"},children:"Nouveaut\xe9"})," : Tous les formulaires sont maintenant disponible, le darkmode a \xe9galement \xe9t\xe9 ajout\xe9."]})})}),Object(j.jsx)("div",{className:"row mt-1",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("p",{className:"alert alert-secondary",children:"Id\xe9es d'am\xe9lioration par Discord : WaDi#2954"})})}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"col-md-6",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h2",{className:"h5",children:"Rapport"}),Object(j.jsx)("a",{href:"/",onClick:function(t){return e.darkMode(t)},children:"Activer / D\xe9sactiver le mode nuit"})]}),"Arrestation"===this.state.rapport_type&&Object(j.jsx)(p,{data:this.state}),"Amende"===this.state.rapport_type&&Object(j.jsx)(b,{data:this.state}),"Fourriere"===this.state.rapport_type&&Object(j.jsx)(u,{data:this.state}),"Tir"===this.state.rapport_type&&Object(j.jsx)(x,{data:this.state}),"Incident"===this.state.rapport_type&&Object(j.jsx)(O,{data:this.state}),"Saisie"===this.state.rapport_type&&Object(j.jsx)(g,{data:this.state}),Object(j.jsx)("hr",{className:"my-5"}),("Arrestation"===this.state.rapport_type||"Amende"===this.state.rapport_type||"Fourriere"===this.state.rapport_type)&&Object(j.jsx)("div",{className:"d-grid mt-3",children:Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.submitButton,children:"Copier le code"})}),("Tir"===this.state.rapport_type||"Incident"===this.state.rapport_type||"Saisie"===this.state.rapport_type)&&Object(j.jsx)("div",{className:"d-grid mt-3",children:Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.submitForum,children:"Copier le code"})})]})]})})]})}}]),s}(r.a.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6410ef3d.chunk.js.map