import Layout from './layouts';

import store from './redux/store/store';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
