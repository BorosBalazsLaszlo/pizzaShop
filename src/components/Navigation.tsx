import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/navigation.css';
import { CiLogout } from "react-icons/ci";

function Navigation() {

    const handleLogout = () =>{
        sessionStorage.clear();
    }

    return (
        <div className="navigation-container">
            <Nav className="navigation-nav">
                <Nav.Item>
                    <Nav.Link href="/login" className="nav-link">
                        Bejelentkezés
                    </Nav.Link>
                </Nav.Item>
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
                    <Nav.Link href="/kosar" eventKey="link-1" className="nav-link">
                        Kosár
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/rendelesek" eventKey="link-1" className="nav-link">
                        Rendelések
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <button className='logout' onClick={handleLogout}><CiLogout /></button>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Navigation;
