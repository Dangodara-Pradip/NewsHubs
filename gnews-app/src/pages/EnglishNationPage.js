import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishNationPage() {
  return (
    <NewsPage
      category="nation"
      lang="en"
      title="Nation News"
      langLabel="English"
      categoryIcon={getCategoryIcon('nation')}
    />
  );
}

export default EnglishNationPage;
