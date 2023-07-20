import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('HeaderApp/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="container">Demo home page diff</div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;