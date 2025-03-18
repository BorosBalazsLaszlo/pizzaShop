import React, { useState, useEffect } from 'react';
import '../css/kosar.css';
import { Pizza } from '../types/Pizza';
import toastSuccess from '../toasts/toastSuccess';
import toastFailed from '../toasts/toastFailed';

function Kosar() {
    const [kosar, setKosar] = useState<Pizza[]>([]);

    useEffect(() => {
        const savedKosar = localStorage.getItem('kosar');
        if (savedKosar) {
            setKosar(JSON.parse(savedKosar));
        }
    }, []);

    const deleteItem = async (index: number) => {
        try {
            const newKosar = [...kosar];
            newKosar.splice(index, 1);
            setKosar(newKosar);
            localStorage.setItem('kosar', JSON.stringify(newKosar));
            toastSuccess('Sikeres törlés!');
        } catch (err) {
            toastFailed('Sikertelen törlés!');
        }
    };

    const deleteBasket = () => {
        try {
            const newKosar: React.SetStateAction<Pizza[]> = [];
            setKosar(newKosar);
            localStorage.setItem('kosar', JSON.stringify(newKosar));
            toastSuccess('Sikeres ürítés!');
        } catch (err) {
            toastFailed('Sikertelen ürítés!');
        }
    };

    const vegosszeg = kosar.reduce((total, item) => total + item.ar, 0);

    return (
        <div>
            <h1>Kosár</h1>
            <div className="kosar">
                {kosar.length > 0 ? (
                    <div>
                        <table>
                            <tbody>
                                {kosar.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                alt={item.nev}
                                                src={`http://localhost:8001/api/kepek/${item.imageUrl}`}
                                            />
                                        </td>
                                        <td>{item.nev}</td>
                                        <td>{item.ar}Ft</td>
                                        <td>
                                            <button
                                                className="torles"
                                                onClick={() => deleteItem(index)}
                                            >
                                                Törlés
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <div className="clearAll">
                                <button className="torles2" onClick={deleteBasket}>
                                    Kosár törlése
                                </button>
                            </div>
                        </table>
                        <h2>Végösszeg: {vegosszeg}Ft</h2>
                    </div>
                ) : (
                    <p>A kosár üres.</p>
                )}
            </div>
        </div>
    );
}

export default Kosar;
