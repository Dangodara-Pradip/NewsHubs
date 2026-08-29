import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiBusinessPage() {
  return (
    <NewsPage
      category="business"
      lang="gu"
      title="Business News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('business')}
    />
  );
}

export default GujaratiBusinessPage;
