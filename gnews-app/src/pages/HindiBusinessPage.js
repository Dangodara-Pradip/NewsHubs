import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiBusinessPage() {
  return (
    <NewsPage
      category="business"
      lang="hi"
      title="Business News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('business')}
    />
  );
}

export default HindiBusinessPage;
