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
        .app{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        `}</style>
    </div>
  );
}

export default App;
