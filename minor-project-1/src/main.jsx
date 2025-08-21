
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { PagenationContextProvider } from './context/PagenationContextProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
        <PagenationContextProvider>
            <App />
        </PagenationContextProvider>
    </BrowserRouter>
  
)
