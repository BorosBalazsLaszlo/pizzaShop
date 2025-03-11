import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pizza } from '../types/Pizza';
import apiClient from '../api/api';
import toastFailed from '../toasts/toastFailed';

function SinglePizza() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [pizza, setPizza] = useState<Pizza | null>(null);

    const [ar, setAr] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [leiras, setLeiras] = useState('');
    const [nev, setNev] = useState('');

    // ar: number,
    // imageUrl: string,
    // leiras: string,
    // nev: string,

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await apiClient.get(`/pizzak/${id}`);
                setPizza(response.data);
                setAr(response.data.ar);
                setImageUrl(response.data.imageUrl);
                setLeiras(response.data.leiras);
                setNev(response.data.nev);
            } catch (err: any) {
                toastFailed('Hiba a termék lekérésénél.');
            }
        };
        fetchPizza();
    }, [id]);

    return (
        <div>
            <h1>Szigma pédzs</h1>

            <p>{pizza?.nev}</p>
            <p>{pizza?.ar}</p>
            <p>{pizza?.leiras}</p>
            <img alt={pizza?.nev} src={`http://localhost:8001/api/kepek/${pizza?.imageUrl}`} />
        </div>
    );
}

export default SinglePizza;
