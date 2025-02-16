import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react-pizza-vite">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
)
