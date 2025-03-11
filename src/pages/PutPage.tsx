import React, { useEffect, useState } from 'react';
import { Pizza } from '../types/Pizza';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap';
import apiClient from '../api/api';
import '../css/pizzak.css';
import toastSuccess from '../toasts/toastSuccess';
import toastFailed from '../toasts/toastFailed';

function PutPage() {
    const [pizzak, setPizzak] = useState<Pizza[]>([]);

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

    const updateAr = async (id: number, newPrice: number) => {
        const updatedPizza = {
            ar: newPrice,
        } as Pizza;

        try {
            await apiClient.put(`/pizzak/${id}`, updatedPizza);
            toastSuccess('Sikeres ár változás!');
        } catch (err: any) {
            toastFailed('Sikertelen változtatás.');
        }
    };

    const handlePriceChange = (id: number, value: number) => {
        setPizzak(pizzak.map((pizza) => (pizza.id === id ? { ...pizza, ar: value } : pizza)));
    };

    const deletePizza = async (id: number) => {
        try {
            await apiClient.delete(`/pizzak/${id}`);
            setPizzak(pizzak.filter((pizza) => pizza.id !== id));
            toastSuccess('Pizza sikeresen törölve!');
        } catch (err: any) {
            toastFailed('Hiba történt a pizza törlésekor.');
        }
    };

    return (
        <div>
            <h1>Változtasd meg!</h1>
            <div className="pizzak">

                {pizzak.map((pizza) => (
                    <Card key={pizza.id} style={{ width: '18rem' }}>
                        <img
                            alt={pizza.nev}
                            src={`http://localhost:8001/api/kepek/${pizza.imageUrl}`}
                        />
                        <CardBody>
                            <CardTitle className="card-title">{pizza.nev}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted">
                                <input
                                    type="number"
                                    value={pizza.ar}
                                    onChange={(e) =>
                                        handlePriceChange(pizza.id, Number(e.target.value))
                                    }
                                />
                            </CardSubtitle>
                            <CardText>{pizza.leiras}</CardText>
                            <button className='change' onClick={() => updateAr(pizza.id, pizza.ar)}>
                                Változtatás
                            </button>
                            <br />
                            <br />
                            <button className='torles' onClick={() => deletePizza(pizza.id)}>Törlés</button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default PutPage;
