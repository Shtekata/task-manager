import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <Body />
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
