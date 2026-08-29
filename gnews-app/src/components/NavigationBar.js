import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES, LANGUAGES } from '../config/navigation';

function NavigationBar() {
  const { pathname } = useLocation();

  const activeLang =
    LANGUAGES.find((l) => pathname.startsWith(`/${l.prefix}`)) ?? LANGUAGES[0];

  const activeCategory =
    CATEGORIES.find((c) => pathname.endsWith(`/${c.slug}`))?.slug ?? 'general';

  return (
    <Navbar expand="lg" sticky="top" className="app-navbar">
      <Container>
        <Navbar.Brand as={Link} to={`/${activeLang.prefix}/general`} className="navbar-brand-custom">
          <span className="brand-icon">📰</span>
          GNews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto nav-categories">
            {CATEGORIES.map(({ slug, label }) => (
              <Nav.Link
                key={slug}
                as={Link}
                to={`/${activeLang.prefix}/${slug}`}
                className={activeCategory === slug ? 'active' : ''}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <span className="lang-dropdown-title">
                  🌐 {activeLang.label}
                </span>
              }
              id="nav-dropdown-language"
              align="end"
            >
              {LANGUAGES.map(({ prefix, label }) => (
                <NavDropdown.Item
                  key={prefix}
                  as={Link}
                  to={`/${prefix}/${activeCategory}`}
                  active={activeLang.prefix === prefix}
                >
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
