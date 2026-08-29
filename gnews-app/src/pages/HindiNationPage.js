import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function HindiNationPage() {
  return (
    <NewsPage
      category="nation"
      lang="hi"
      title="Nation News"
      langLabel="Hindi"
      categoryIcon={getCategoryIcon('nation')}
    />
  );
}

export default HindiNationPage;
