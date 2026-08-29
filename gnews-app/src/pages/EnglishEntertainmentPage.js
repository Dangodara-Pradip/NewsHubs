import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishEntertainmentPage() {
  return (
    <NewsPage
      category="entertainment"
      lang="en"
      title="Entertainment News"
      langLabel="English"
      categoryIcon={getCategoryIcon('entertainment')}
    />
  );
}

export default EnglishEntertainmentPage;
