import './App.css'
import Desktop from './components/DesktopLeft'
import Button from './components/Button'
import sound from './assets/sound/sound.mp3'
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [isFirstPageUnlocked, setIsFirstPageUnlocked] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleUnlockPage = () => {
    setIsFirstPageUnlocked(true);

    if (audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

  };

  const scrollToPage3 = () => {
    const page3 = document.getElementById('page-3');
    if (page3) {
      page3.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (!isFirstPageUnlocked) {
        e.preventDefault();
      }
    };

    document.body.addEventListener('wheel', handleScroll, { passive: false });
    document.body.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      document.body.removeEventListener('wheel', handleScroll);
      document.body.removeEventListener('touchmove', handleScroll);
    };
  }, [isFirstPageUnlocked]);

  return (
    <div className="App">
      <div className="container">
        <div className="desktop-left">
          <Desktop />
        </div>
        <div className="desktop-right">

        {!isFirstPageUnlocked && (
            <div className="page-1">
              <div className="cover">
                <div className="sub-title">
                  <p>WEDDING ANNOUNCEMENT</p>
                </div>
                <div className="title">
                  <h2>Tiffany & Jared</h2>
                  <h3>#TImetoshaRE</h3>
                </div>
                <button onClick={handleUnlockPage} className="unlock-btn">
                  Open
                </button>
              </div>
            </div>
          )}

          <div id='page-2' className="page-2">
            <div className="cover">
              <div className="sub-title">
                <p>WEDDING ANNOUNCEMENT</p>
              </div>
              <div className="title">
                <h2>Tiffany & Jared</h2>
                <h3>#TImetoshaRE</h3>
              </div>
            </div>
            <div className="button-container">
              <a onClick={scrollToPage3}>
                SCROLL TO BEGIN
              </a>
            </div>
          </div>

          <div id='page-3' className="page-3">
            <div className="opening">
              <div className="sub-title">
                <p>DEAR MR-MRS-MS,</p>
                <p>Family & Friends</p>
              </div>
              <div className="title">
                <h2>
                  Welcome to
                  <br />
                  Tiffany & Jared’s
                  <br />
                  Wedding Website
                </h2>
              </div>
              <div className="desc">
                <p>
                  Together with joyful hearts and the grace of God,
                  we joyfully announce the upcoming of our marriage.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;