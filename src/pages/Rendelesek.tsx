import React, { useEffect, useState } from 'react';
import { Rendeles } from '../types/Rendeles';
import apiClient from '../api/api';
import toastFailed from '../toasts/toastFailed';
import { useNavigate } from 'react-router-dom';
import '../css/rendelesek.css'; // Import the CSS file

function Rendelesek() {
    const [rendelesek, setRendelesek] = useState<Rendeles[]>([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = sessionStorage.getItem('BasicAut') || '';
        setToken(storedToken);

        if (storedToken === '') {
            toastFailed('Nincs jogosultsága.');
            setTimeout(() => {
                navigate('/login');
            }, 900);
        } else {
            const fetchOrder = async () => {
                try {
                    const response = await apiClient.get('/rendelesek', {
                        headers: {
                            Authorization: `Basic ${storedToken}`,
                        },
                    });
                    setRendelesek(response.data);
                } catch (err: any) {
                    toastFailed('Hiba a fetchelésnél.');
                }
            };
            fetchOrder();
        }
    }, [navigate, token]);

    return (
        <div>
            <h1>Rendelések</h1>

            <div className="orders">
                {rendelesek.map((rendeles) => (
                    <div key={rendeles.pizzaId}>
                        <p>PizzaId: {rendeles.pizzaId}</p>
                        <p>Pizza mennyiség: {rendeles.mennyiseg}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rendelesek;
