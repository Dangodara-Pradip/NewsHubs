import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiHealthPage() {
  return (
    <NewsPage
      category="health"
      lang="hi"
      title="Health News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('health')}
    />
  );
}

export default HindiHealthPage;
