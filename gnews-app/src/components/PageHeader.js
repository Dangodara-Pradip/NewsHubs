import { Container } from 'react-bootstrap';

function PageHeader({ title, langLabel, categoryIcon, articleCount }) {
  return (
    <div className="page-header">
      <Container>
        <div className="page-header-inner">
          <div className="page-header-text">
            {categoryIcon && <span className="page-header-icon">{categoryIcon}</span>}
            <div>
              <p className="page-header-breadcrumb">
                GNews · {langLabel}
              </p>
              <h1 className="page-header-title">{title}</h1>
            </div>
          </div>
          {!articleCount && articleCount !== 0 ? null : (
            <div className="page-header-stats">
              <span className="stat-number">{articleCount}</span>
              <span className="stat-label">Articles</span>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default PageHeader;
