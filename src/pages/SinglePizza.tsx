import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pizza } from '../types/Pizza';
import apiClient from '../api/api';
import toastFailed from '../toasts/toastFailed';
import toastSuccess from '../toasts/toastSuccess';
import '../css/singlepizza.css';

function SinglePizza() {
    const { id } = useParams();

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

    const updatePizza = async () => {
        try {
            const updatedPizza = {
                ar: ar,
                imageUrl: imageUrl,
                leiras: leiras,
                nev: nev,
            } as Pizza;

            const response = await apiClient.put(`/pizzak/${id}`, updatedPizza);
            toastSuccess('Sikeres frissítés!');
        } catch (err: any) {
            toastFailed('Sikertelen frissítés!');
        }
    };

    return (
        <div>
            <div className="information">
                <h2>Név{pizza?.nev}</h2>
                <p>Ár{pizza?.ar}</p>
                <p>Leírás: sdasdasdasdasdadasdasdasdasdasdsadsad{pizza?.leiras}</p>
            </div>
            <img className="floating" alt={pizza?.nev} src={`https://placehold.co/600x400`} />

            <div className="main-put">
                <h4>Adatok frissítése</h4>
                <form action="submit">
                    <input type="text" placeholder="Név" onChange={(e) => setNev(e.target.value)} />
                    <div>
                        <input
                            type="number"
                            placeholder="Ár (Ft)"
                            onChange={(e) => setAr(Number(e.target.value))}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Kép url"
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <div className="leiras">
                        <textarea
                            placeholder="Leírás"
                            onChange={(e) => setLeiras(e.target.value)}
                        />
                    </div>
                </form>

                <button type="submit" onClick={updatePizza}>
                    Frissítés
                </button>
            </div>
        </div>
    );
}

export default SinglePizza;
