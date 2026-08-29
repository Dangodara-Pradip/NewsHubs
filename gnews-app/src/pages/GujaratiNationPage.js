import NewsPage from '../components/NewsPage';
import { getCategoryIcon } from '../config/navigation';

function GujaratiNationPage() {
  return (
    <NewsPage
      category="nation"
      lang="gu"
      title="Nation News"
      langLabel="Gujarati"
      categoryIcon={getCategoryIcon('nation')}
    />
  );
}

export default GujaratiNationPage;
