function ArticleCard({ article }) {
  const timeAgo = article.publishedAt
    ? new Date(article.publishedAt).toLocaleString()
    : '';

  return (
    <article className="article-card">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="article-card-link"
      >
        <div className="article-card-image-wrap">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="article-card-image"
              loading="lazy"
            />
          ) : (
            <div className="article-card-image-placeholder" />
          )}
        </div>
        <div className="article-card-body">
          <div className="article-card-meta">
            {article.source?.name && (
              <span className="source-pill source-pill-sm">{article.source.name}</span>
            )}
            {timeAgo && <span className="article-time">{timeAgo}</span>}
          </div>
          <h3 className="article-card-title">{article.title}</h3>
          {article.description && (
            <p className="article-card-description">{article.description}</p>
          )}
        </div>
      </a>
      <div className="article-card-footer">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-action primary"
        >
          Read article
        </a>
        {article.source?.url && (
          <a
            href={article.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-action secondary"
          >
            Visit source
          </a>
        )}
      </div>
    </article>
  );
}

export default ArticleCard;
