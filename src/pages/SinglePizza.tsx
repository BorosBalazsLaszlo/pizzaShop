import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pizza } from '../types/Pizza';
import apiClient from '../api/api';
import toastFailed from '../toasts/toastFailed';
import toastSuccess from '../toasts/toastSuccess';
import '../css/singlepizza.css';

function SinglePizza() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pizza, setPizza] = useState<Pizza | null>(null);
    const [ar, setAr] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [leiras, setLeiras] = useState('');
    const [nev, setNev] = useState('');

    const storedToken = sessionStorage.getItem('BasicAut') || undefined;

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

    const updatePizza = async (e: React.FormEvent) => {
        e.preventDefault();
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

    const deletePizza = async (id: number) => {
        try {
            await apiClient.delete(`/pizzak/${id}`);
            toastSuccess('Pizza sikeresen törölve!');
            navigate("/");
        } catch (err: any) {
            toastFailed('Hiba történt a pizza törlésekor.');
        }
    };

    return (
        <div data-testid="put-page" className="single-put">
            {!storedToken ? (
                <div className="information">
                    <h2>{pizza?.nev}</h2>
                    <p>{pizza?.ar}</p>
                    <p>{pizza?.leiras}</p>
                </div>
            ) : (
                <div data-testid="put-page" className="main-put">
                    <h4>Adatok frissítése</h4>
                    <form onSubmit={updatePizza}>
                        <input
                            type="text"
                            placeholder="Név"
                            value={nev}
                            onChange={(e) => setNev(e.target.value)}
                        />
                        <div>
                            <input
                                type="number"
                                placeholder="Ár (Ft)"
                                value={ar}
                                onChange={(e) => setAr(Number(e.target.value))}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Kép url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <div className="leiras">
                            <textarea
                                placeholder="Leírás"
                                value={leiras}
                                onChange={(e) => setLeiras(e.target.value)}
                            />
                        </div>
                        <button className='frissites' type="submit">Frissítés</button>
                    </form>
                    <button className='torles' onClick={() => deletePizza(Number(pizza?.id))}>Törlés</button>
                </div>
            )}
            {pizza?.imageUrl && (
                <img
                    className="floating"
                    alt={pizza?.nev}
                    src={`http://localhost:8001/api/kepek/${pizza?.imageUrl}`}
                />
            )}
        </div>
    );
}

export default SinglePizza;
