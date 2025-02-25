import React, { useEffect, useState } from 'react';
import { Pizza } from '../types/Pizza';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap';
import apiClient from '../api/api';
import '../css/pizzak.css';
import toastSuccess from '../toasts/toastSuccess';
import toastFailed from '../toasts/toastFailed';

function Pizzak() {
    const [pizzak, setPizzak] = useState<Pizza[]>([]);

    const kosar: Array<Pizza> = [];

    useEffect(() => {
        const fetchPizzak = async () => {
            try {
                const response = await apiClient.get('/pizzak');
                setPizzak(response.data);
            } catch (err: any) {
                toastFailed("Hiba a fetchelésnél: " + err);
            }
        };
        fetchPizzak();
    }, []);

    return (
        <div>
            <div className='headline'>
            <h1>Pizzáink</h1>
            </div>
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
                                    toastSuccess("Sikeres hozzáadás!");
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
