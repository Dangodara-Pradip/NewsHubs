import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiTechnologyPage() {
  return (
    <NewsPage
      category="technology"
      lang="hi"
      title="Technology News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('technology')}
    />
  );
}

export default HindiTechnologyPage;
