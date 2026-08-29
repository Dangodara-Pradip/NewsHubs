import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiEntertainmentPage() {
  return (
    <NewsPage
      category="entertainment"
      lang="gu"
      title="Entertainment News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('entertainment')}
    />
  );
}

export default GujaratiEntertainmentPage;
