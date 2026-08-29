import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiSciencePage() {
  return (
    <NewsPage
      category="science"
      lang="hi"
      title="Science News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('science')}
    />
  );
}

export default HindiSciencePage;
