import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishHealthPage() {
  return (
    <NewsPage
      category="health"
      lang="en"
      title="Health News"
      langLabel="English"
      categoryIcon={getCategoryIcon('health')}
    />
  );
}

export default EnglishHealthPage;
