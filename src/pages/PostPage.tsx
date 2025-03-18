import React, { useEffect, useState } from 'react';
import '../css/postpage.css';
import apiClient from '../api/api';
import { Pizza } from '../types/Pizza';
import toastSuccess from '../toasts/toastSuccess';
import toastFailed from '../toasts/toastFailed';
import { useNavigate } from 'react-router-dom';

const PostPage: React.FC = () => {
    
    const navigate = useNavigate();
    const [nev, setNev] = useState('');
    const [ar, setAr] = useState(0);
    const [leiras, setLeiras] = useState('');
    const [image, setImage] = useState('');

    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('BasicAut') || '';
        setToken(storedToken);

        if (storedToken === '') {
            toastFailed('Nincs jogosultsága.');
            setTimeout(() => {
                navigate('/login');
            });
        }
    }, [navigate, token])

    const handleSubmit = async () => {
        const newPizza = {
            nev,
            ar,
            leiras,
            imageUrl: image,
        } as Pizza;

        try {
            await apiClient.post('/pizzak', newPizza);
            toastSuccess('Pizza sikeresen hozzáadva!');
            navigate("/");
        } catch (err: any) {
            toastFailed('Hiba történt a pizza hozzáadása során.');
        }
    };

    return (
        <div>
            <h1>Adj hozzá pizzát!</h1>
            <div className="main">
                <div>
                    <input
                        type="text"
                        placeholder="Adj meg egy nevet!"
                        value={nev}
                        onChange={(e) => setNev(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Adj meg egy árat!"
                        value={ar}
                        onChange={(e) => setAr(Number(e.target.value))}
                    />
                </div>
                <div className="leiras">
                    <textarea
                        placeholder="Adj meg egy leírást!"
                        value={leiras}
                        onChange={(e) => setLeiras(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Adj meg egy image nevet!"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit}>Hozzáadás</button>
                </div>
            </div>
        </div>
    );
};

export default PostPage;