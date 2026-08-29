import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiWorldPage() {
  return (
    <NewsPage
      category="world"
      lang="hi"
      title="World News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('world')}
    />
  );
}

export default HindiWorldPage;
