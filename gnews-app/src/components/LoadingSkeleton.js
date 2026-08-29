import { Row, Col } from 'react-bootstrap';

function SkeletonCard({ featured }) {
  if (featured) {
    return (
      <div className="skeleton-featured">
        <div className="skeleton-block skeleton-image-lg" />
        <div className="skeleton-content">
          <div className="skeleton-block skeleton-text-sm" />
          <div className="skeleton-block skeleton-text-lg" />
          <div className="skeleton-block skeleton-text-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="skeleton-card">
      <div className="skeleton-block skeleton-image" />
      <div className="skeleton-block skeleton-text-sm" />
      <div className="skeleton-block skeleton-text-md" />
      <div className="skeleton-block skeleton-text-xs" />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="loading-skeleton">
      <SkeletonCard featured />
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Col key={i}>
            <SkeletonCard />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LoadingSkeleton;
