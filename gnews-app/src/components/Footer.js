import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="app-footer">
      <Container>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-icon">📰</span>
            <span>GNews App</span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} GNews App · Developed by{' '}
            <span className="footer-developer">Dangodara Pradip Maheshbhai</span>
            {' · '}News powered by{' '}
            <a href="https://gnews.io" target="_blank" rel="noopener noreferrer">
              GNews API
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
