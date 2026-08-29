import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiGeneralPage() {
  return (
    <NewsPage
      category="general"
      lang="hi"
      title="General News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('general')}
    />
  );
}

export default HindiGeneralPage;
