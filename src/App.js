import { useEffect, useState } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const [user, setUser] = useState('');
  useEffect(() => {
    const localUser = localStorage.getItem('username');
    setUser(() => (localUser));
  }, []);

  const loginHandler = (x) => { setUser(() => (x.username)); localStorage.setItem('username', x.username) };
  
  const logoutHandler = (x) => setUser('');

  return (
    <div className="site-wrapper">
      <Header user={user}/>
      <Body loginHandler={loginHandler} logoutHandler={logoutHandler} />
      <Footer />
      <style jsx>{`
        .site-wrapper{
          display: flex;
          flex-direction: column;
          text-align: center;
          min-height: 100vh;
        }
        `}</style>
    </div>
  );
}

export default App;
