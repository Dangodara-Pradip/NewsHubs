import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiSportsPage() {
  return (
    <NewsPage
      category="sports"
      lang="gu"
      title="Sports News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('sports')}
    />
  );
}

export default GujaratiSportsPage;
