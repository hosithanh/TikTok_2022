import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyle/Index';
import 'antd/dist/antd.css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <GlobalStyles>
        <App />
    </GlobalStyles>,
);
reportWebVitals();
