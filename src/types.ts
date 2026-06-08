export type Section = 'home' | 'chi-sono' | 'libri' | 'opere-arte' | 'poesia' | 'eventi' | 'curatela' | 'rubriche' | 'contatti';

export interface Book {
  id: string;
  title: string;
  cover: string;
  synopsis: string;
  prefaceExtract: string;
  criticalNotes: string;
  purchaseLinks: {
    name: string;
    url: string;
  }[];
}

export interface ArtPiece {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Poem {
  id: string;
  title: string;
  text: string;
  videoUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category: 'premio' | 'presentazione' | 'mostra' | 'menzione';
}

export interface Article {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
}
