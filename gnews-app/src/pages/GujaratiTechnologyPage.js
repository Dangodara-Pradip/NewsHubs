import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiTechnologyPage() {
  return (
    <NewsPage
      category="technology"
      lang="gu"
      title="Technology News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('technology')}
    />
  );
}

export default GujaratiTechnologyPage;
