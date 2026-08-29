import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishBusinessPage() {
  return (
    <NewsPage
      category="business"
      lang="en"
      title="Business News"
      langLabel="English"
      categoryIcon={getCategoryIcon('business')}
    />
  );
}

export default EnglishBusinessPage;
