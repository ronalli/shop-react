import './App.css';

import { Header, Footer, Shop } from './components';

import { ContextProvider } from './context/context';

function App() {
  return (
    <div className='app'>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
