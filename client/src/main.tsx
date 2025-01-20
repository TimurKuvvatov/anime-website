import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/scss/main.scss';

import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <Provider store={store()}>
        <App />
    </Provider>,
);
