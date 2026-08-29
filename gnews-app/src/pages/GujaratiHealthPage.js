import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiHealthPage() {
  return (
    <NewsPage
      category="health"
      lang="gu"
      title="Health News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('health')}
    />
  );
}

export default GujaratiHealthPage;
