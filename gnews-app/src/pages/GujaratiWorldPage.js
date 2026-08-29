import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiWorldPage() {
  return (
    <NewsPage
      category="world"
      lang="gu"
      title="World News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('world')}
    />
  );
}

export default GujaratiWorldPage;
