import React, { useEffect, useState } from 'react';
import { Pizza } from '../types/Pizza';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap';
import apiClient from '../api/api';
import '../css/pizzak.css';

function Pizzak() {
    const [pizzak, setPizzak] = useState<Pizza[]>([]);

    const kosar: Array<Pizza> = [];

    useEffect(() => {
        const fetchPizzak = async () => {
            try {
                const response = await apiClient.get('/pizzak');
                setPizzak(response.data);
            } catch (err: any) {
                alert(err);
            }
        };
        fetchPizzak();
    }, []);

    return (
        <div>
            <h1>Pizzáink</h1>
            <div className="pizzak">
                {pizzak.map((pizza) => (
                    <Card key={pizza.id} style={{ width: '18rem' }}>
                        <img
                            alt={pizza.nev}
                            src={`http://localhost:8001/api/kepek/${pizza.imageUrl}`}
                        />
                        <CardBody>
                            <CardTitle className="card-title">{pizza.nev}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted">{pizza.ar}Ft</CardSubtitle>
                            <CardText>{pizza.leiras}</CardText>
                            <button className='addTo'
                                onClick={() => {
                                    kosar.push(pizza);
                                    localStorage.setItem('kosar', JSON.stringify(kosar));
                                }}
                            >
                                Megrendelés
                            </button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Pizzak;
