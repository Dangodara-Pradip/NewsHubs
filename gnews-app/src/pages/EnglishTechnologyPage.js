import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishTechnologyPage() {
  return (
    <NewsPage
      category="technology"
      lang="en"
      title="Technology News"
      langLabel="English"
      categoryIcon={getCategoryIcon('technology')}
    />
  );
}

export default EnglishTechnologyPage;
