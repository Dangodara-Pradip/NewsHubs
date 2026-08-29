import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiEntertainmentPage() {
  return (
    <NewsPage
      category="entertainment"
      lang="hi"
      title="Entertainment News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('entertainment')}
    />
  );
}

export default HindiEntertainmentPage;
