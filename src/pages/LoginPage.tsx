import { useState } from 'react';
import '../css/login.css';
import toastFailed from '../toasts/toastFailed';
import apiClient from '../api/api';
import toastSuccess from '../toasts/toastSuccess';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const user = {
                username: username,
                password: password,
            };

            const response = await apiClient.post('/login', user);

            if (response.status === 200) {
                toastSuccess('Sikeres bejelentkezés!');
                const token = btoa(`${username}:${password}`);
                sessionStorage.setItem('BasicAut', token);
                navigate("/");
            }
        } catch (err: any) {
            toastFailed('Nincs ilyen felhasználó!');
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleLogin}>
                <h2 data-testid="bejelentkezes" >Bejelentkezés</h2>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Felhasználónév"
                        value={username}
                        onChange={(e) => SetUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Jelszó"
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)}
                    />
                </div>
                <button className="login" type="submit">
                    Bejelentkezés
                </button>
            </form>
        </div>
    );
};

export default Login;
