import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishGeneralPage() {
  return (
    <NewsPage
      category="general"
      lang="en"
      title="General News"
      langLabel="English"
      categoryIcon={getCategoryIcon('general')}
    />
  );
}

export default EnglishGeneralPage;
