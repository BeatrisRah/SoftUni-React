import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Header />
    </>
)
