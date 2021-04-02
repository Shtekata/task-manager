import { useEffect } from 'react';
import Body from './components/Body';
import Footer from './components/Core/Footer';
import Header from './components/Core/Header';
import { Provider } from './Context/Context';

function App() {
  return (
    <div className="site-wrapper">
      <Provider>
        <Header />
        <Body />
        <Footer />
      </Provider>
      <style jsx>{`
        .site-wrapper{
          display: flex;
          flex-direction: column;
          text-align: center;
          min-height: 97vh;
        }
        `}</style>
    </div>
  );
}

export default App;
