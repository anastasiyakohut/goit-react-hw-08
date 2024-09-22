import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import  {App} from './components/App/App'
import { store, persistor } from './redux/store';
import '../src/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="bottom-center" reverseOrder={false}/>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);