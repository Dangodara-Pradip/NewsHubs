import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiSportsPage() {
  return (
    <NewsPage
      category="sports"
      lang="hi"
      title="Sports News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('sports')}
    />
  );
}

export default HindiSportsPage;
