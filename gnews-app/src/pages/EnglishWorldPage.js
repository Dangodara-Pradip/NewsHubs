import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function EnglishWorldPage() {
  return (
    <NewsPage
      category="world"
      lang="en"
      title="World News"
      langLabel="English"
      categoryIcon={getCategoryIcon('world')}
    />
  );
}

export default EnglishWorldPage;
