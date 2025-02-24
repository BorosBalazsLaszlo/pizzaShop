import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pizzak from './pages/Pizzak';
import Rendelesek from './pages/Kosar';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PostPage from './pages/PostPage';
import PutPage from './pages/PutPage';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Navigation />
        <BrowserRouter>
            <Routes>
                <Route path="/pizzak" element={<Pizzak />} />
                <Route path="/rendelesek" element={<Rendelesek />} />
                <Route path="/postpage" element={<PostPage />} />
                <Route path="/putpage" element={<PutPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
