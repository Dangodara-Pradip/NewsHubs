import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiGeneralPage() {
  return (
    <NewsPage
      category="general"
      lang="gu"
      title="General News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('general')}
    />
  );
}

export default GujaratiGeneralPage;
