import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiSciencePage() {
  return (
    <NewsPage
      category="science"
      lang="gu"
      title="Science News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('science')}
    />
  );
}

export default GujaratiSciencePage;
