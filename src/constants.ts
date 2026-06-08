import { Book, ArtPiece, Poem, Event, Article, Exhibition } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Dal cuore in poi',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
    synopsis: 'Una silloge poetica strutturata su tre pilastri: Parola (il fiume dei sentimenti), Resilienza (la capacità di rinascita) e Donna (il principio cardine dell\'essere). Un percorso che esplora l\'amore in tutte le sue forme.',
    prefaceExtract: '...la misura di ciò che sei io la prendo col metro del mio cuore...',
    criticalNotes: 'Edito da Bertoni (2023). Prefazione di Luca Farinotti, postfazione di Paolo Borgognone. Recensito da Giancarlo Baroni per la musicalità e la precisione sensoriale.',
    purchaseLinks: [
      { name: 'Sito Editore (Bertoni)', url: 'https://www.bertonieditore.com' },
      { name: 'Amazon Store', url: '#' },
      { name: 'Libreria Universitaria', url: '#' }
    ]
  },
  {
    id: '2',
    title: 'Le parole che si scrivono',
    cover: 'https://images.unsplash.com/photo-1512820790803-73c772ff376f?q=80&w=800&auto=format&fit=crop',
    synopsis: 'Raccolta finalista al Premio Luciano Serra. Poesie che parlano coraggiosamente d\'amore, con una precisione sensoriale che richiama lo stile di Prévert e Sandro Penna.',
    prefaceExtract: '...ti aspetto dove il mondo finisce e cominciamo noi...',
    criticalNotes: 'Menzione speciale per la musicalità e la felicità retorico-stilistica (Premio Luciano Serra 2024).',
    purchaseLinks: [
      { name: 'Amazon Store', url: '#' }
    ]
  }
];

export const ART_PIECES: ArtPiece[] = [
  {
    id: 'a1',
    title: 'Luce Segreta',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop',
    description: 'Opera vincitrice del concorso di pittura. Esposta a Barcellona e Nizza. Un gioco di pigmenti che svela l\'invisibile.'
  },
  {
    id: 'a2',
    title: 'Vibrazioni',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop',
    description: 'Disegno a matita e carboncino. Parte della collezione "Magica Voce", dove pittura e musica si fondono.'
  },
  {
    id: 'a3',
    title: 'Orizzonti di Resilienza',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop',
    description: 'Tecnica mista su tela. Riflessi del percorso creativo con Rete Carcere Parma, dove l\'arte diventa riscatto.'
  }
];

export const POEMS: Poem[] = [
  {
    id: 'p1',
    title: 'Amare cos\'è',
    text: 'Sono nata ieri nella luce opaca\ndi un mattino di autunno,\ncon l\'aria che gira intorno\ne le luci che si confondono con il buio,\nsettembre rimane il luogo\nin cui ti incontro, in cui ti perdo_\n\nsei troppo vicino al mio cuore,\ncosì tanto che il respiro mi manca\ne non riesco a stringere il nodo\na quel fazzoletto che deve\nricordare al mondo che ti aspetto_',
  },
  {
    id: 'p2',
    title: 'Silenzio di Neve',
    text: 'Cade leggera la polvere bianca,\ncopre le strade, cover il dolore.\nNel silenzio del mondo che stanca,\nrinasce un battito, rinasce il vigore.',
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e0',
    title: 'Vincitrice Premio Trasimeno 2025',
    date: 'Aprile 2025',
    description: 'Riconoscimento nazionale di prestigio per l\'eccellenza nella produzione poetica contemporanea.',
    category: 'premio'
  },
  {
    id: 'e1',
    title: 'Reading "Amare tra forza e fragilità"',
    date: '8 Febbraio 2026',
    description: 'Successo al Centro Culturale Mavarta con partecipazione internazionale. Un momento di totale condivisione di bellezza.',
    category: 'presentazione'
  },
  {
    id: 'e2',
    title: 'Magica Voce: Multidisciplinarietà',
    date: 'Marzo 2025',
    description: 'Incontro tra pittura, scultura, canto lirico e poesia. Un ecosistema di arti performative.',
    category: 'mostra'
  },
  {
    id: 'e3',
    title: 'Premio Nazionale Luciano Serra',
    date: 'Febbraio 2024',
    description: 'Finalista con menzione speciale per la musicalità e la felicità retorico-stilistica dei versi.',
    category: 'premio'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art1',
    title: 'Il senso delle parole',
    source: 'Gazzettino Santilariese',
    date: 'Rubrica Periodica',
    url: '#',
    excerpt: 'Una rubrica dedicata alla scoperta della poesia contemporanea, dove le parole diventano ponti tra mondi ed emozioni profonde.',
    readingTime: '4 min lettura'
  },
  {
    id: 'art2',
    title: 'Leggiamo l\'arte & Le donne nell\'arte',
    source: 'Gazzettino Santilariese',
    date: 'Rubrica Periodica',
    url: '#',
    excerpt: 'Un viaggio critico e appassionato tra le pieghe dell\'arte moderna, con un focus speciale sulla forza creativa femminile.',
    readingTime: '5 min lettura'
  },
  {
    id: 'art3',
    title: 'Vi consiglio un libro',
    source: 'Gazzettino Santilariese',
    date: 'Rubrica Mensile',
    url: '#',
    excerpt: 'Consigli di lettura curati da Claudia Belli, da grande lettrice, per chi cerca storie che lasciano un segno indelebile.',
    readingTime: '3 min lettura'
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex1',
    title: 'Riflessi di Silenzio',
    date: '15 Settembre - 5 Ottobre 2026',
    location: 'Galleria Farini, Bologna',
    description: 'Mostra personale che mette in dialogo le tele pittoriche astratte dell\'artista con i versi della silloge "Dal cuore in poi". Un percorso itinerante tra parola tradotta in pigmento e tele meditative.',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ex2',
    title: 'Magica Voce: Sinergie dell\'Anima',
    date: '12 - 24 Dicembre 2026',
    location: 'Centro Culturale Mavarta, Parma',
    description: 'Esposizione sensoriale multidisciplinare. Le ultime opere visive di Claudia Belli fanno da scenografia a performance dal vivo di canto lirico, scultura e letture poetiche d\'atmosfera.',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ex3',
    title: 'Frammenti di Luce interiore',
    date: 'Ottobre 2025',
    location: 'Galerie d\'Art de L\'Europe, Parigi',
    description: 'Esposizione internazionale acclamata dalla critica. Al centro della mostra una selezione di opere astratte a tecnica mista ispirate alla forza della resilienza e alla sublimazione del dolore.',
    status: 'past',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ex4',
    title: 'Artisti in Rete: Confini e Libertà',
    date: 'Maggio 2024',
    location: 'Palazzo del Governatore, Parma',
    description: 'Progetto espositivo sinergico nato dai laboratori artistico-pittorici guidati da Claudia Belli in collaborazione con la Rete Carcere di Parma, promuovendo il riscatto sociale attraverso l\'attività creativa.',
    status: 'past',
    image: 'https://images.unsplash.com/photo-1533158307587-828f0a9501a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ex5',
    title: 'Estetiche Contemporanee: Luce Segreta',
    date: 'Novembre 2023',
    location: 'Reial Cercle Artístic, Barcellona',
    description: 'Esposizione collettiva di pittura contemporanea e grafica d\'autore europea, in cui l\'opera acrilica "Luce Segreta" di Claudia Belli ha guadagnato la medaglia critica e l\'ammirazione del pubblico.',
    status: 'past',
    image: 'https://images.unsplash.com/photo-1501472312651-726afd116ff1?q=80&w=800&auto=format&fit=crop'
  }
];
