import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishSciencePage() {
  return (
    <NewsPage
      category="science"
      lang="en"
      title="Science News"
      langLabel="English"
      categoryIcon={getCategoryIcon('science')}
    />
  );
}

export default EnglishSciencePage;
