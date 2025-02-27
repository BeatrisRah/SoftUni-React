import { createRoot } from 'react-dom/client'
import './styles.css'
import Header from './components/Header.jsx'
import Section from './components/Section/Section.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Header />
      <main className="main">
        <Section />
      </main>
    </>
)
