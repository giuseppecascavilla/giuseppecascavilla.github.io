---
title: "Elections Day"
description: "San Severo, 4 candidati sindaco, 21 liste e 495 aspiranti consiglieri."
pubDate: "Jun 01 2024"
heroImage: "/blog_images/election_day.webp"
tags: ["elezioni","sansevero"]
---

<div class="text-5xl font-bold">Elezioni comunali - San Severo 8 e 9 giugno</div>


Tralasciando le elezioni Europee dove tutto sommato le idee politiche sono ben delineate, ho cercato di indagare un pó le varie idee e programmi politici per le nostre elezioni comunali a San Severo. Le domande sono semplici, cosa ci stanno vendendo i nostri cari politici locali? Che idee hanno e cosa vogliono fare per la nostra San Severo, che a quanto pare, a detta di tutti i candidati "tornerá bellissima". Ora, non so voi, ma io il dono dell'ubiquitá ancora non ce l'ho, seguire tutti i comizi e tutte le promesse, mi risulta alquanto complicato. Allora ho deciso di chiedere aiuto alla tecnologia e a un pó di strumenti per fare analisi di dati e cercare di capire meglio quali sono gli argomenti trattati, le promesse che stanno facendo, e cercare di capirne un pó di piú. Per non fare offesa a nesusno procecederó in ordine alfabetico. </b>

Per questa analisi ho recuperato i programmi elettorali di tutti i nostri candidati disponibili <a href="https://www.comune.san-severo.fg.it/elezioni-comunali-2024-programma-elettorale-delle-liste/" target="_blank"><b>QUI</b></a>. Lasciatemi esprimere un commento, alcuni molto bel scritti, altri decisamente troppo scarni e, a mio modesto parere, poveri(ssimi) di contenuti. Tuttavia, dato che le primesse politiche solitamente non vengono mai messe per iscritto, ho deciso di recuperare alcuni video dove i nostri candidati fanno importanti annunci, estrarre il parlato, e integrare i programmi politici di tutti i candidati cosi da non introdurre bias (pregiudizi). Non tratteró qui le differenze tra i programmi pubblicati e i vari annunci fatti nei vari comizi, anche perché praticamente si potrebbe concludere qui la discussione. Ma come Data Scientist ho deciso di andare avanti nella mia indagine. </b>

Come interpretare i risultati:<br>
Il <b>CIRRUS</b> é un visualizzatore della frequenza dei termini, piú il termine é grande piú significa che é stato ripetuto ed usato nel testo analizzato.<br> 
Lo strumento <b>Contesti</b> o <b>Keywords in Context</b> mostra ciascuna occorrenza di ciascuna parola chiave con un frammento di testo che lo circonda (il contesto). In questo modo riusciamo a capire meglio in che contresto le parole chiave sono state utilizzate. 


<table><thead>
  <tr style="background-color:#faf7f5"> 
    <th >Caposiena<iframe style='width: 437px; height: 372px;' src='https://voyant-tools.actusnews.com/tool/Cirrus/?corpus=c711612fb456540abfe5a0482cc8d0a5'></iframe>
    <!--<object data="/blog_images/analisi_elezioni/CIRRUScaposiena.svg"></object>-->
    </th>
    <th>Colangelo<iframe style='width: 437px; height: 372px;' src='https://voyant-tools.actusnews.com/tool/Cirrus/?corpus=bdcbe81b2d2099077cb049732e70e52e'></iframe>
    <!--<object data="/blog_images/analisi_elezioni/CIRRUScolangelo.svg"></object>-->
    </th>
  </tr></thead>
<tbody>
  <tr>
    <th>Giuliani<iframe style='width: 437px; height: 372px;' src='https://voyant-tools.actusnews.com/tool/Cirrus/?corpus=2df497449028cf60639435ef2bd452e7'></iframe>
    <!--<object data="/blog_images/analisi_elezioni/CIRRUSgiuliani.svg"></object>-->
    </th>
    <th>Masucci<iframe style='width: 437px; height: 372px;' src='https://voyant-tools.actusnews.com/tool/Cirrus/?corpus=7bde0a5a041521a5faa89804245595fd'></iframe>
    <!--<object data="/blog_images/analisi_elezioni/CIRRUSmasucci.svg"></object>-->
    </th>
  </tr>
</tbody>
</table>

Dall'analisi del CIRRUS notiamo subito come le parole San Severo e Cittá/Cittadini siano fortemente utilizzata da tutti i nostri candidati sindaco. Questo a mio avviso é comunque un ottimo segno da parte di tutti i candidati che mettono costantemente al centro dei loro discorsi e della loro politica il cittadino. Tuttavia, andando un pó oltre quelle che sono le keywords principali, ci si rende subito conto di come i candidati Colangelo e Giuliani siano piu carenti in quanto a TEMI e TEMATICHE. Andando per ordine, se analizziamo un pó piu in dettaglio il CIRRUS della candidata Colangelo, troviamo poche altre keywords capaci di veicolare le idee della attuale candidata. Infatti, troviamo keyworda come Territorio e Sociale che comunque risultano abbastanza marginali date le dimensioni. Allo stesso modo la parola Servizio/Servizi risualtano essere poco utilizzate nei vari discorsi. Similmente, la candidata Giuliani non condivide molti temi. Le keywords principali infatti risultano Donne e Sanitá/Ospedale. Diversa é invece la discussione relativamente ai temi dei due candidati Caposiena e Masucci che invece risultano piú ricchi di tematiche e punti proposti. Il CIRRUS di Caposiena vede come keywords Sociale, Servizi, Comunitá, Comune/Comunale, e in maniera molto, ma molto marginale sembra riferirsi alla Cultura e ai Giovani, e alla Sicurezza. Si vede chiaramente come le 3 parole risultino essere molto piccole e dunque poco utilizzate dalla candidata Caposiena. Nel Cirrus del candidato Masucci, allo stesso modo troviamo molti temi. Le parole Territorio, Sicurezza, Giovani, Lavoro, Culturale con Teatro, Sistema, e Sviluppo risultano essere le keywords principali del candidato Masucci. Tuttavia, differentemente dagli altri candidati, Masucci vede un forte utilizzo della parola Fare nella sua proposta di politica.</b>

A questo punto credo sia essenziale passare alla parte di CONTESTO relativamente alle keywords utilizzate dai nostri candidati sindaco per cercare di capire come queste parole vengono utilizzate e soprattutto in che contesto. In questo caso utilizzeró lo strumento Contesti e cercheró di interpretare i risultati ottenuti.  

<table><thead>
  <tr style="background-color:#faf7f5"> 
    <th >Caposiena<iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=cittadini&docIndex=0&corpus=c711612fb456540abfe5a0482cc8d0a5'></iframe>   
    </th>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=piano&docIndex=0&corpus=c711612fb456540abfe5a0482cc8d0a5'></iframe></th>
  </tr></thead>
<tbody>
  <tr>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=obiettivo&docIndex=0&corpus=c711612fb456540abfe5a0482cc8d0a5'></iframe></th>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=citt%C3%A0&docIndex=0&corpus=c711612fb456540abfe5a0482cc8d0a5'></iframe></th>
  </tr>
</tbody>
</table>

Analizziamo a questo punto le 4 parole piú usate dalla candidata Caposiena, tra cui Cittadini, Piano, Obiettivo, e Cittá. Notiamo subito dal contesto come la parola Cittadini sia utilizzata all'interno di quelle che in maniera generale definirei "solite promesse" elettorali (considerazione personale e non condivisibile). Si tratta a mio avviso di contesti generici che rimandano ad una idea vaga, in questo caso di "ascolto attivo dei cittadini". 


<ul>
    <li>"I bisogni reali dei cittadini e una nuova organizzazione comunale"</li>
    <li>"Dialogo aperto e costruttivo con i cittadini riprogrammando il servizio URP"</li>
    <li>"un progcesso guidato dall'ascolto attivo dei cittadini attraverso un approccio dal basso"</li>
</ul>
Per quanto riguarda invece la parola "Piano" notiamo come questa keyword sia prettamente utilizzata nell'ambito del decoro urbano e in modo marginale come piano per le politiche sociali. Infatti nel piano della San Severo Genrativa non viene spiegato in che cosa consiste questo Welfare Civico. Anche la keywork Obiettivo é spesso utilizzata nell'ambito del decoro urbano. Sulla stessa linea la parola Cittá, che dall'analisi sembra essere molto legata al decoro urbano. 


<table><thead>
  <tr style="background-color:#faf7f5"> 
    <th >Colangelo<iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=sansevero&docIndex=0&corpus=bdcbe81b2d2099077cb049732e70e52e'></iframe></th>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=progetto&docIndex=0&corpus=bdcbe81b2d2099077cb049732e70e52e'></iframe></th>
  </tr></thead>
<tbody>
  <tr>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=citt%C3%A0&docIndex=0&corpus=bdcbe81b2d2099077cb049732e70e52e'></iframe></th>
    <th></th>
  </tr>
</tbody>
</table>

Per quanto riguarda la candidata Colangelo, ho preso in considerazione solo le keywords SanSevero, Progetto, Cittá, in quanto le altre risultavano essere di poco interesse ai fini dell'analisi. Nel caso della candidata Colangelo la parola San Severo viene utilizzata in un contesto piú ampio e interessante anche relativamente alla questione socio-economica della cittá. Dalle analisi, tuttavia la parola Progetto viene utilizzata in un contesto molto piu ampio, senza ben definire cosa riguarda questo progetto. Interessante, invece, l'uso della keyword Cittá molto utilizzata in un contesto di cambiamento, e guardando ad un futuro nuovo. 


<table><thead>
  <tr style="background-color:#faf7f5"> 
    <th >Giuliani<iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=sansevero&docIndex=0&corpus=2df497449028cf60639435ef2bd452e7'></iframe></th>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=sanit%C3%A0&docIndex=0&corpus=2df497449028cf60639435ef2bd452e7'></iframe></th>
  </tr></thead>
<tbody>
  <tr>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=fare&docIndex=0&corpus=2df497449028cf60639435ef2bd452e7'></iframe></th>
    <th></th>
  </tr>
</tbody>
</table>

Anche per la candidata Giuliani, le keyword piú interessanti risultano essere 3. San Severo, Sanitá, Fare. In questo caso la parola San Severo, diversamente dai precedenti candidati, risulta essere utilizzata in un contesto di marketing territoriale per la cittá. Relativamente al marketing, la candidata sembra proporre l'utilizzo della nostra Festa del Soccorso proprio come volano per questo marketing. Subito dopo troviamo la parola Sanitá, che peró viene utilizzata in un contesto molto generico e generale. A volte come paragone con quella del Nord piú efficiente, a volte per sottolinearene l'inequitá della sanitá privata, peró non vi é nessuna "ricetta" o proposta concreta per affrontare questo problema nel comune di San Severo. Ultimo, ma non per importanza, troviamo il termine Fare. Anche in questo caso, peró, i termine é usato in un contesto piu ampio e non ben definito. Da sottolineare, alcune considerazioni della candidata relativamente al "fare per le donne". 

<table><thead>
  <tr style="background-color:#faf7f5"> 
    <th >Masucci<iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=territorio&docIndex=0&corpus=7bde0a5a041521a5faa89804245595fd'></iframe></th>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=lavoro&docIndex=0&corpus=7bde0a5a041521a5faa89804245595fd'></iframe></th>
  </tr></thead>
<tbody>
  <tr>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=sansevero&docIndex=0&corpus=7bde0a5a041521a5faa89804245595fd'></iframe></th>
    <th><iframe style='width: 558px; height: 250px;' src='https://voyant-tools.actusnews.com/tool/Contexts/?query=sicurezza&docIndex=0&corpus=7bde0a5a041521a5faa89804245595fd'></iframe></th>
  </tr>
</tbody>
</table>

Il candidato sindaco Masucci, utilizza nei suoi discorsi parole diverse da quelle degli altri candidati. Troviamo infatti come keywords le parole Territorio, Lavoro, San Severo, Sicureza. La parola Territorio assume una connotazione interessante nei discorsi del candidato Masucci. Possiamo infatti notare come la parola venga legata spesso alla parola Lavoro, ma anche come opportunitá per "legare le risorse umane" proprio al territorio ed evitare lo spopolamento. Ma ancora, la parola Territorio legata anche alla reputazione del nostro paese. La parola assume molteplici significati all'interno dei discorsi e delle proposto del candidato Masucci. La parola San Severo, invece viene legata agli "Itinerari e Cammini" che passano nel nostro territorio e alla Festa del Soccorso con le ralative batterie. Si deduce dal contesto la proposta di un "Sistema Sansevero" per rilanciare il territorio. Passanso poi alla successiva keyword, Lavoro, si nota come quest'ultima sia legata ai Giovani "Condiszioni indispensabili per creare lavoro e radicare sul territorio le nostre risorse umane". Infine, troviamo la parola Sicurezza. Termine non utilizzato da nessuno degli altri candidati, o almeno non usato in mado rilevante. La parola Sicurezza nelle prime 3 righe dell'analisi assume 3 significati diversi. Condizioni di Sicurezza per le nostre batterie senza snaturare la tradizione. Sicurezza in abito agro alimentare. E infine Sicurezza nel contesto della legalitá urbana. </b>

Se siete arrivati fino a qui, vi ringrazio. La mia analisi non ha in alcun modo l'intento di modificare pensiero politico o il voto di nessuno. Vuole essere un semplice esercizio informatico, l'applicazione di alcuni tool di machine learning che uso quotidianamente nel mio lavoro per cercare di capire qualcosa in piú relativamente ai nostri futuri politici. Schiarirmi un pó le idee per un voto piú consapevole. Tuttavia, crtedo sia il caso di un ulteriore passo verso la tecnologia di oggi. Cosí ho deciso di dare in pasto la mia analisi a ChatGPT. Ho chiesto cosí proprio all'intelligenza artificial generativa, di darmi una ulteriore risposta in merito al voto delle comunali di San Severo. Se siete curiosi di sapere quale é stata la risposta dell'oracolo moderno, vi lascio di seguito il link allo screenshot.

<table>
          <tr style="background-color:#faf7f5"> <!--change color background index image-->
              <th><b>Ecco questo week end possiamo votare per il nuovo sindaco di San Severo in provincia di Foggia. <br> 
              In base ad un breve testo che ti condivido dimmi quale candidato secondo te ha la ricetta
              migliore per risolvere i problemi della cittá:&ensp; &nbsp;</b></th> <!--<b>this is the bold text</b>-->
              <th>
                <a href="/blog_images/chatGPT_elezioni_sansevero.webp" target="_blank" rel="noopener" title="chat_gpt">
                <Image src="/blog_images/chatgptLOGO.webp" loading="eager" alt="" width="200" height="45" style="display:inline-block"></Image></th><th style="float:right"></th>
              </a>
          </tr>
          </table>