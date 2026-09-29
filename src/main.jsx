import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "remixicon/fonts/remixicon.css";
import NavContext from './Components/Context/NavContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <NavContext>
            <App />
        </NavContext>
    </BrowserRouter>
)
