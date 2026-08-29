import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { API_KEY } from '../config';
import FeaturedArticle from './FeaturedArticle';
import ArticleCard from './ArticleCard';
import PageHeader from './PageHeader';
import LoadingSkeleton from './LoadingSkeleton';

function NewsPage({ category, lang, title, langLabel, categoryIcon }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadNews = () => {
      fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&apikey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((json) => {
          if (cancelled) return;
          if (json.articles) {
            setArticles(json.articles);
          }
          setLoading(false);
        })
        .catch(() => {
          if (!cancelled) setLoading(false);
        });
    };

    setLoading(true);
    loadNews();
    const interval = setInterval(loadNews, 1000000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [category, lang]);

  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="news-page">
      <PageHeader
        title={title}
        langLabel={langLabel}
        categoryIcon={categoryIcon}
        articleCount={loading ? null : articles.length}
      />

      <Container className="news-container pb-5">
        {loading ? (
          <LoadingSkeleton />
        ) : articles.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📰</div>
            <h4>No articles found</h4>
            <p>Try another category or check back later.</p>
          </div>
        ) : (
          <>
            {featured && <FeaturedArticle article={featured} />}

            {rest.length > 0 && (
              <>
                <div className="section-divider">
                  <span>More Stories</span>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4 article-grid">
                  {rest.map((article, index) => (
                    <Col key={index}>
                      <ArticleCard article={article} />
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export default NewsPage;
