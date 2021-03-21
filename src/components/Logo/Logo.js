import logo from '../logo.svg';

const Logo = () => (
    <div className="logo-wrapper">
        <img src={logo} className="logo" alt="logo" />
        <style jsx>{`
        .logo-wrapper {
          text-align: center;
        }
        
        .logo {
          height: 10vmin;
          pointer-events: none;
        }
        
        @media (prefers-reduced-motion: no-preference) {
          .logo {
            animation: App-logo-spin infinite 1s linear;
          }
        }
        
        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        `}</style>
    </div>
);

export default Logo;