import { ExternalLink } from 'lucide-react';
import { ARTICLES } from '../constants';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { ReadingProgressBar } from '../components/ReadingProgressBar';

export const Articles = () => {
  return (
    <PageTransition>
      <ReadingProgressBar />
      <section id="rubriche" className="py-40 px-12 bg-brand-paper/30 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>Pensieri e Riflessioni</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map(article => (
              <a 
                key={article.id} 
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-brand-cream p-8 rounded-2xl shadow-sm border border-brand-ink/5 hover:shadow-md transition-all border-l-4 border-l-brand-ink"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-serif text-brand-stone text-sm">{article.source}</h4>
                    <p className="text-xs text-brand-stone/60">{article.date}</p>
                  </div>
                  <ExternalLink size={16} className="text-brand-stone group-hover:text-brand-ink transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-ink transition-colors text-brand-ink">{article.title}</h3>
                <p className="text-brand-ink/70 text-sm italic">"{article.excerpt}"</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
