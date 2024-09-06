import ReactDOM from 'react-dom/client';
import { App } from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
