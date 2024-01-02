import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
function App() {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      
      const scrollY = window.scrollY;
      // const scrollX = window.scrollX;

      const parallaxBackground = document.querySelector('.parallax-heading20');
      // Adjust the background position based on the scroll position
      parallaxBackground.style.transform = `translateY(-${scrollY * 0.2}px)`; // Adjust the multiplier for desired parallax effect

      const parallaxBackground2 = document.querySelector('.parallax-heading2');
      // Adjust the background position based on the scroll position
      parallaxBackground2.style.transform = `translateY(-${scrollY * 0.9}px)`; // Adjust the multiplier for desired parallax effect

      // const parallaxBackground3 = document.querySelector('.parallax-heading3');
      // // Adjust the background position based on the scroll position
      // parallaxBackground3.style.transform = `translateY(-${scrollY * 0.2}px)`; // Adjust the multiplier for desired parallax effect

    });
  });
  return (
    <div className="App1">
      <Navbar1 />
      <div className="App">
        <Home />
      </div>
      <div className='service'>
        <Services/>
      </div>
      {/* <div class="parallax-container">
        <div class="parallax-background"></div>
        <h1 class="parallax-heading">Your Heading</h1>
      </div> */}
    </div>
  );
}

export default App;
