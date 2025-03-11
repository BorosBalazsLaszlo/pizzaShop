import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pizzak from './pages/Pizzak';
import Kosar from './pages/Kosar';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PostPage from './pages/PostPage';
import PutPage from './pages/PutPage';
import NotFound from './pages/NotFound';
import SinglePizza from './pages/SinglePizza';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
import Rendelesek from './pages/Rendelesek';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Navigation />
        <BrowserRouter>
            <Routes>
                <Route path="/pizzak" element={<Pizzak />} />
                <Route path="/pizzak/:id" element={<SinglePizza />} />
                <Route path="/rendelesek" element={<Rendelesek />} />
                <Route path="/kosar" element={<Kosar />} />
                <Route path="/postpage" element={<PostPage />} />
                <Route path="/putpage" element={<PutPage />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
        <Footer />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
