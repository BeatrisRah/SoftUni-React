import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { UserContext } from './context/UserContext.js'


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
				<App />
			
		</BrowserRouter>
	</StrictMode>,
)
