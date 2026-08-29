import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishSportsPage() {
  return (
    <NewsPage
      category="sports"
      lang="en"
      title="Sports News"
      langLabel="English"
      categoryIcon={getCategoryIcon('sports')}
    />
  );
}

export default EnglishSportsPage;
