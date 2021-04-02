import { useEffect, useMemo, useState } from 'react';
import Body from './components/Body';
import Footer from './components/Core/Footer';
import Header from './components/Core/Header';
import { ErrProvider } from './Context/ErrorContext';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = localStorage.getItem('username');
    setUser(() => (localUser));
  }, []);

  const loginHandler = (x) => { setUser(() => (x.username)); localStorage.setItem('username', x.username) };
  
  const logoutHandler = (x) => setUser(null);

  return (
    <div className="site-wrapper">
      <ErrProvider>
        <Header user={user} logoutHandler={logoutHandler} />
      </ErrProvider>
      <Body loginHandler={loginHandler} />
      <Footer />
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
