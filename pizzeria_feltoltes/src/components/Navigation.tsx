import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/navigation.css';

function Navigation() {
    return (
        <div className="navigation-container">
            <Nav className="navigation-nav">
                <Nav.Item>
                    <Nav.Link href="/pizzak" className="nav-link">
                        Pizzák
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/postpage" className="nav-link">
                        Hozzáadás
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <p className="brand-name">Geri Pizzéria</p>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/putpage" className="nav-link">
                        Változtatás
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/rendelesek" eventKey="link-1" className="nav-link">
                        Kosár
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Navigation;
