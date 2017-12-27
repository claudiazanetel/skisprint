import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

import loading from '../assets/loading.gif';

class News extends Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount () {
    axios.get(`/api.php?endpoint=news`)
      .then(response => {
        console.log(response.data.posts);
        this.setState({posts: response.data.posts});
      });
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 newsPage">
            <h1>NEWS</h1>
            <div className="news">
              <p className="datePost">26/12/2017</p>
              <h4 className="titlePost">TRICOLORE NUMERO SEI PER PELLEGRINO-NOECKLER
STUERZ-DEBERTOLIS ED Ė TRIPUDIO FIAMME ORO 
A FIERA DI PRIMIERO (TN)</h4>
              <p className="comunicatoStampa">Oggi 15.a Ski Sprint - Campionato Italiano Assoluto Team Sprint a Fiera di Primiero (TN)
Federico Pellegrino e Dietmar Noeckler conquistano il sesto titolo tricolore in sette anni
Giulia Stuerz - Ilaria Debertolis ed è ancora vittoria per le Fiamme Oro
Prossimo obiettivo per l’US Primiero la Primiero Dolomiti Marathon del 7 luglio <br></br><br></br>

	
Oggi a Fiera di Primiero (TN) si è disputata la Ski Sprint Primiero Energia, prova unica del Campionato Italiano Assoluto Team Sprint. Sfide scoppiettanti all’interno di un tracciato ad anello di 400 metri, con vittorie della coppia delle meraviglie delle Fiamme Oro, Federico Pellegrino e Dietmar Noeckler, per la sesta volta in sette anni campioni alla gara organizzata dall’US Primiero. Un dominio che indica la superiorità del duetto fra il valdostano e l’altoatesino, nella speranza che questo possa portare i frutti sperati anche nelle prossime sfide sprint di Coppa del Mondo. Tripudio per le Fiamme Oro (Michael Hellweger e Sergio Rigoni) anche per la seconda posizione, mentre sul gradino più basso del podio è salito l’Esercito con Giacomo Gabrielli ed Enrico Nizzi. <br></br><br></br>
Al femminile rimonta supersonica di Giulia Stuerz dopo la caduta della compagna di squadra Ilaria Debertolis, un altro titolo per le Fiamme Oro che si affianca a quello maschile. Seconda posizione per le Fiamme Gialle con Greta Laurent e Lucia Scardoni, mentre le Carabiniere Debora Roncari e Gaia Vuerich conquistano il terzo posto dopo essere state a lungo in testa. <br></br><br></br>
La Team Sprint maschile è stata una gara “lineare”, dal primo all’ultimo momento, con bagarre solo per il secondo e terzo posto e Federico Pellegrino a dettar legge, da campionissimo qual è, al momento più opportuno. L’Esercito parte forte con Enrico Nizzi a comandare la truppa e Pellegrino secondo; le posizioni restano invariate per i primi sette giri, con “Chicco” a studiare la situazione, evitando errori come quello che lo scorso anno causò la sconfitta del duo che da cinque edizioni consecutive riusciva a primeggiare alla Ski Sprint Primiero Energia. Gabrielli conduce davanti a Noeckler con Rastelli terzo, ma Pellegrino fa valere la legge del campione concedendo anche la passerella al proprio compagno. L’Esercito tenta di rimanere a contatto ma perde anche la medaglia d’argento, acquisita splendidamente da Michael Hellweger e Sergio Rigoni. <br></br><br></br>
Soddisfatto “Chicco” Pellegrino: “Abbiamo deciso di impostare così la gara, volevo dare a “Didi” la possibilità di correre l’ultima frazione con le sue gambe per cercare le sensazioni giuste, mi ha dato il cambio ancora in testa ed ho cercato di finire il lavoro al meglio. Tutto come da programma, le gambe sembrano esserci e competere qui è sempre speciale. Mi piace meno partire per Fiera di Primiero ancora con il pranzo di Natale sullo stomaco, ma se i risultati sono questi…!”. <br></br><br></br>
Positiva anche la prestazione di Noeckler: “Non abbiamo rischiato niente, siamo sempre stati primi o secondi, ma qui bisogna fare attenzione perché l’imprevisto è dietro l’angolo. Ora spero di partire bene al Tour e di arrivare in condizione in Val di Fiemme”. I due sono stati festeggiati anche con un “bacio in diretta” delle rispettive fidanzate Ilaria Debertolis, compagna di “Didi” Noeckler, e Greta Laurent, di Federico Pellegrino. Le ragazze si erano ben disimpegnate in precedenza, con Greta Laurent a partire subito forte lasciando comunque la testa della corsa a Gaia Vuerich. Ilaria Debertolis recupera posizioni, con Lucia Scardoni in scia per le Fiamme Gialle. La Ski Sprint è una gara particolare, richiede concentrazione ad ogni singola curva, Scardoni e Stuerz si trovano in testa al settimo giro ma tutte le atlete stanno risparmiando fiato per la volata. La Debertolis è a contatto dietro alla Roncari quando accade l’imprevisto prima del cambio, quest’ultima inciampa facendo cadere anche la primierotta che “rivive” gli spettri dello scorso anno. Giulia Stuerz ne raccoglie il passaggio di consegne e la rimonta è di quelle da non dimenticare: “Non so come abbia fatto a rimontare – afferma Giulia Stuerz al termine della gara - mi ha dato una grande mano Gaia (Vuerich – ndr) ripartita di buona lena per riprenderle, pensavo fosse più difficile ma siamo riuscite a portare a casa questo titolo. Ora il mio intento al Tour de Ski è quello di arrivare fino a casa sul Cermis, l’obiettivo è riscattarci dai risultati finora ottenuti”. Chi rimarrà a riposo nei prossimi appuntamenti è invece Ilaria Debertolis: “Non mi sentivo male ed ero arrabbiata quando sono caduta, alla fine ci è andata bene e sono contenta della nostra vittoria, ci voleva, anche perché per me gareggiare qui davanti alla mia gente è incredibile”. <br></br><br></br> 
Nel pomeriggio si è disputata anche la Team Sprint Young riservata ai giovani, sempre sullo stesso tracciato ad anello nel centro di Fiera di Primiero.
La 15.a edizione della Ski Sprint appena trascorsa verrà trasmessa sui canali di Rai Sport alle ore 00.20, ed in replica alle ore 21.30 di domani, ma le menti del comitato organizzatore dell’US Primiero stanno già pensando al prossimo appuntamento: la Primiero Dolomiti Marathon del 7 luglio, terza edizione fra Fiera di Primiero e San Martino di Castrozza, all’interno dei confini del Parco Naturale Paneveggio – Pale di San Martino. La scorsa edizione il comitato organizzatore dell’US Primiero in collaborazione con il Venice Marathon Club ha potuto vantare circa 2.500 iscritti, ed ora la manifestazione punta ad effettuare un ulteriore salto di qualità. Il percorso di 42K presenta un dislivello positivo di 1242 metri e negativo di 1543 metri, mentre il punto più alto raggiunto è posto a 1683 metri, con gli atleti circondati durante tutto il loro tragitto da un ambiente davvero unico, suggestivo e incontaminato, tutto da scoprire e da ammirare. La Primiero Dolomiti Marathon proporrà anche percorsi di 26K e 6.5K per i neofiti della corsa. </p>
            </div>
            {
              this.state.posts.map(post => {
                let description = post.description.substring(0, post.description.length - 9);
                return (
                  <div className="news" key={post.title}>
                    <p className="datePost">{post.date}</p>
                    <h4><a className="titlePost" href={post.link} target="_blank">{post.title}</a></h4>
                    <p>{description} [<a href={post.link} target="_blank">Read more...</a>]</p>
                  </div>
                );
              })
            }
          </div>
          <Sidebar />
          <Patrocinio />
          <Sponsors />

        </div>

      </div>
    );
  }
}

export default News;

