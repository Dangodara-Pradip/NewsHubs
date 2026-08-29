function FeaturedArticle({ article }) {
  const timeAgo = article.publishedAt
    ? new Date(article.publishedAt).toLocaleString()
    : '';

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="featured-article text-decoration-none"
    >
      <div className="featured-image-wrap">
        {article.image ? (
          <img src={article.image} alt={article.title} className="featured-image" />
        ) : (
          <div className="featured-image-placeholder" />
        )}
        <div className="featured-overlay" />
        <span className="featured-badge">Top Story</span>
      </div>
      <div className="featured-content">
        <div className="featured-meta">
          {article.source?.name && (
            <span className="source-pill">{article.source.name}</span>
          )}
          {timeAgo && <span className="featured-time">{timeAgo}</span>}
        </div>
        <h2 className="featured-title">{article.title}</h2>
        {article.description && (
          <p className="featured-description">{article.description}</p>
        )}
        <span className="featured-cta">
          Read full article
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
            <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default FeaturedArticle;
