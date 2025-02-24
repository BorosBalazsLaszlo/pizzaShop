import React, { useState, useEffect } from 'react';
import '../css/kosar.css'
import { Pizza } from '../types/Pizza';

function Kosar() {
    const [kosar, setKosar] = useState<Pizza[]>([]);

    useEffect(() => {
        const savedKosar = localStorage.getItem('kosar');
        if (savedKosar) {
            setKosar(JSON.parse(savedKosar));
        }
    }, []);

    const vegosszeg = kosar.reduce((total, item) => total + item.ar, 0);

    return (
        <div>
            <h1>Kosár</h1>
            <div className='main'>
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
                                    </tr>
                                ))}
                            </tbody>
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
