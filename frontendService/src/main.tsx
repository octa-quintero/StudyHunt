import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  console.error('No se encontró el elemento con id "root" en el DOM.');
}
