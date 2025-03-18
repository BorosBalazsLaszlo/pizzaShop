import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../css/navigation.css';
import { RiLogoutBoxLine } from 'react-icons/ri';
import toastSuccess from '../toasts/toastSuccess';
import toastFailed from '../toasts/toastFailed';
import { useNavigate } from 'react-router-dom';

function Navigation() {

    const navigate = useNavigate();
    const storedToken = sessionStorage.getItem('BasicAut') || undefined;

    const handleLogout = () => {
        if (!storedToken) {
            toastFailed('Már nincs bejelentkezve!');
        } else {
            navigate("/");
            sessionStorage.clear();
            toastSuccess('Sikeres kijelentkezés!');
        }
    };

    return (
        <div className="navigation-container">
            <Nav className="navigation-nav">
                {storedToken ? (
                    <Nav.Item>
                        <Nav.Link href="/rendelesek" eventKey="link-1" className="nav-link">
                            Rendelések
                        </Nav.Link>
                    </Nav.Item>
                    
                ) : (
                    <>
                        <Nav.Item>
                            <Nav.Link href="/" className="nav-link">
                                Pizzák
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/kosar" eventKey="link-1" className="nav-link">
                                Kosár
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <p className="brand-name">Geri Pizzéria</p>
                        </Nav.Item>
                    </>
                )}

                {!storedToken ? (
                    <Nav.Item>
                        <Nav.Link href="/login" className="nav-link">
                            Bejelentkezés
                        </Nav.Link>
                    </Nav.Item>
                ) : (
                    <>
                        <Nav.Item>
                            <Nav.Link href="/" className="nav-link">
                                Pizzák
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/kosar" eventKey="link-1" className="nav-link">
                                Kosár
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <p className="brand-name">Geri Pizzéria</p>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/postpage" className="nav-link">
                                Hozzáadás
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/putpage" className="nav-link">
                                Változtatás
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <button className="logout" onClick={handleLogout}>
                                <RiLogoutBoxLine />
                            </button>
                        </Nav.Item>
                    </>
                )}
            </Nav>
        </div>
    );
}

export default Navigation;
